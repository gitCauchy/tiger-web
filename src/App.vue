<script setup>
import { RouterView } from 'vue-router'
import router from './router';
import { ref, onMounted } from 'vue'

const inputArea = ref(null)
function getResult() {
  router.push("/getResult")
}


onMounted(() => {
  inputArea.value.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.key === 'Enter') {
      getResult();
    }
  })
})
</script>

<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="../src/assets/logo.png" />
      </div>
      <div class="title">Tiger</div>
    </div>
    <div class="sloganBox">
      <div class="slogan">
        <details>
          <summary>A good mathematical tool should belong to all mankind</summary>
        </details>
      </div>
    </div>
    <div class="body">
      <div class="left">
        <div class="tip">Input here:</div>
        <textarea ref="inputArea" id="input" class="input" rows="30" placeholder="input /h to get help"></textarea>
        <div>
          <button @click="getResult"></button>



        </div>
      </div>
      <div class="right">
        <div class="tip">Result:</div>
        <div class="result">
          <RouterView class="result-view" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;

  .header {
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      height: 35px;
      width: 35px;
      margin-left: 8px;
      margin-right: 8px;

      img {
        width: 35px;
        height: 35px;
      }
    }

    .title {
      font-size: 20px;
      font-weight: bolder;
      color: #D2691E
    }

    /* .subTitle {
      font-size: 8px;
    } */
  }

  .sloganBox {
    display: flex;
    justify-content: right;

    .slogan {
      margin-right: 20px;
      font-size: 10px;
    }
  }

  .body {
    display: flex;

    .left {
      border-right: 0.5px dashed gray;
      width: 50%;
      margin-left: 10px;

      /* height: 100%; */
      textarea {
        font-size: large;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        resize: none;
      }
    }

    .right {
      /* border: 1px solid black; */
      width: 50%;

      /* height: 100%; */
      .result {
        /* border: 1px solid black; */

        margin-left: 10px;

        .result-view {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .tip {
    margin-left: 10px;
  }


}
</style>
