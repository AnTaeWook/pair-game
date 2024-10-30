<script>
  import {score, round, page, initScore, initTime} from "../../store/store.js";

  export let shuffle;
  export let modalTitle;
  export let scoreTitle;
  export let btn1Text;

  function setHiScore() {
    // localStorage에 hiScore를 저장하고 가져오기
    let hiScore = Number(localStorage.getItem("hiScore")) || 0;
    if ($score > hiScore) {
      localStorage.setItem("hiScore", $score.toString());
    }
    localStorage.setItem("lastScore", $score.toString());
  }
</script>

<div class="modal">
  <div class="modal-container">
    <h1>{modalTitle}</h1>
    <p class="score-title">{scoreTitle}</p>
    <p class="score">{$score}</p>
    <button class="btn next" on:click={() => {
      setHiScore();
      if(btn1Text === "Next") {
        shuffle();
        $round += 1;
        initTime();
      } else {
        shuffle();
        initScore();
      }
    }}>{btn1Text}</button>
    <button class="btn" on:click={() => {
      setHiScore();
      $page = "title";
      initScore();
    }}>Home</button>
  </div>
</div>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    place-items: center;
  }

  .modal-container {
    background: #fff;
    width: 400px;
    padding: 20px;
    border-radius: 30px;
    border: 10px solid #000000;
    h1 {
      margin-bottom: 5px;
    }
    .score {
      font-size: 36px;
      color: #f63030;
      margin-bottom: 20px;
    }
  }

  .btn {
    font-size: 24px;
    &.next {
      color: #f63030;
    }
  }

</style>
