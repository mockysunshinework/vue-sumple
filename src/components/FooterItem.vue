<template>
    <div>
      <!-- scriptで定義した変数をそれぞれ呼び出す。 -->
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <P>{{ buttonname }}<button @click="clear">clear</button></P>
    </div>
  </template>
  
  <script>
    // コンポーネント化する処理。
    export default {
      data(){
        return {
          // 変数titleとtextを定義する。
          title: "Footer",
          text: "フッター"
        }
      },

      methods: {
        clear(){
					this.total = 0;
					this.$emit("clear",this.total)
        }
      },

      props: {
        buttonname: String
      }
    }
  </script>
  
  <style scoped>
    /* Footerコンポーネントのみに当たるCSS */
    /* Footerコンポーネントは「グレー」にします。 */
    div{
      border: 2px solid #b8b6b6
    }
    h2{
      color: #b8b6b6
    }
    p{
      color: #b8b6b6
    }
  </style>