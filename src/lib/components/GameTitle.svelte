<script>
  import GamePlay from "./GamePlay.svelte";
  import GameScore from "./GameScore.svelte";
  import {page} from "../../store/store.js";
  import bgm from "../../assets/audio/bgm.mp3";
  import {onDestroy} from "svelte";

  export let gameTitle;

  let _BGM = new Audio(bgm);

  function playBGM() {
    _BGM.loop = true;
    _BGM.volume = 0.5;
    _BGM.play();
  }

  $: {
    if ($page !== "play") {
      _BGM.pause();
      _BGM.currentTime = 0;
    }
  }

  // 컴포넌트 종료시 오디오 객체를 삭제
  onDestroy(() => {
    _BGM.pause();
    _BGM = null;
  });
</script>

<main>
  {#if $page === "title"}
    <section class="itim-regular">
      <h1>{gameTitle}</h1>
      <div class="btn-group">
        <button class="btn" on:click={() => {
          $page = "play";
          playBGM();
        }}>Start</button>
        <button class="btn" on:click={() => $page = "score"}>Score</button>
      </div>
    </section>
  {:else if $page === "play"}
    <GamePlay/>
  {:else if $page === "score"}
    <GameScore/>
  {/if}
</main>

<style lang="scss">
 section {
   h1 {
     font-size: 16vw;
     color: #ff3e00;
     -webkit-text-stroke: 10px rgba(0, 0, 0, 0.5);
     paint-order: stroke fill;
   }

   .btn-group {
     display: flex;
     flex-direction: column;
     margin-top: 40px;
     button {
       padding: 10px;
       font-size: 32px;
       background: transparent;
       border: none;
       &:hover {
         text-decoration: underline;
       }
     }
   }
 }
</style>
