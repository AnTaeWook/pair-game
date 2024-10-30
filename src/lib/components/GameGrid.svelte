<script>
  import soundSrcClick from "../../assets/audio/click.mp3";
  import soundSrcMatch from "../../assets/audio/match.mp3";
  import {cards, card_data} from "../../assets/cards.js";
  import {score, time} from "../../store/store.js";
  import Modal from "./Modal.svelte";
  let deck = structuredClone(cards);

  // 클릭한 카드 저장 배열
  let currentCard = -1;
  let flipFreeze = false;
  let isGameClear = false;
  let isGameOver = false;

  let clickSound = new Audio(soundSrcClick);
  let matchSound = new Audio(soundSrcMatch);

  // 카드 랜덤하게 섞기
  function shuffle() {
    deck = structuredClone(cards);
    deck = deck.sort(() => 0.5 - Math.random());
    isGameClear = false;
    isGameOver = false;

    let timer = setInterval(() => {
      $time -= 1;
      if ($time === 0) {
        isGameOver = true;
        clearInterval(timer);
      }
      if (isGameClear) {
        clearInterval(timer);
      }
    }, 1000);
  }

  // 카드 뒤집기
  async function flipCard({index}) {
    if (deck[index].matched || flipFreeze) {
      return;
    }

    if (deck[index].flipped === false) {
      deck[index].flipped = true;
    }

    clickSound.currentTime = 0;
    clickSound.pause();
    clickSound.play();

    if (currentCard === -1 || currentCard === index) {
      currentCard = index;
      return;
    }
    if (deck[currentCard].id === deck[index].id) {
      matchSound.currentTime = 0;
      matchSound.pause();
      matchSound.play();
      deck[index].matched = true;
      deck[currentCard].matched = true;
      $score += 100;
      currentCard = -1;
      if (deck.every(card => card.matched)) {
        isGameClear = true;
        $score += $time * 10;
      }
      return;
    }

    flipFreeze = true;
    await sleep(300);
    deck[currentCard].flipped = false;
    deck[index].flipped = false;
    currentCard = -1;
    flipFreeze = false;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  shuffle();
</script>

<ul class="game-grid">
  {#each deck as card, i}
    <li
        role="presentation"
        class={card.flipped || card.matched ? "card" : "card hidden"}
        on:click={() => {
        flipCard({index : i});
      }}
    >
        <img src={card_data[card.id].imgUrl} alt="">
    </li>
  {/each}
</ul>

{#if isGameClear}
  <Modal {shuffle}
         modalTitle="Game Clear!"
         scoreTitle="Score"
         btn1Text="Next"
  />
{/if}

{#if isGameOver}
  <Modal {shuffle}
         modalTitle="Game Over!"
         scoreTitle="Final Score"
         btn1Text="Replay"
  />
{/if}

<style lang="scss">
  .game-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    list-style-type: none;
    grid-gap: 2%;
    padding: 20px;

    .card {
      position: relative;
      background: #fff;
      aspect-ratio: 1 / 1;
      padding: 20%;
      border-radius: 18%;
      img {
        width: 100%;
        object-fit: contain;
        display: block;
        aspect-ratio: 1 / 1;
        pointer-events: none;
      }

      button {
        background: transparent;
        width: 100%;
        height: 100%;
        padding: 0;
        border: none;
      }
    }
  }

  .game-grid .card.hidden {
    background: rgba(0, 0, 0, 0.5);

    img {
      opacity: 0;
    }
    background-image: url("/images/quest.png");
    background-repeat: no-repeat;
    background-size: 30%;
    background-position: center;
  }
</style>
