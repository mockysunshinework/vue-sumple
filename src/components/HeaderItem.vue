<template>
  <div>
    <!-- scriptで定義した変数をそれぞれ呼び出す。 -->
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
		<P>{{username}}</P>
  </div>
</template>
  
  <script>
    // コンポーネント化する処理。
    export default {
      data(){
        return {
          // 変数titleとtextを定義する。
          title: "Header",
          text: "ヘッダー"
        }
      },
			props: {
				username: String
			}
    }
  </script>
  
  <style scoped>
    /* Headerコンポーネントのみに当たるCSS */
    /* Headerコンポーネントは「ダークグリーン」にします。 */
    div{
      border: 2px solid #006400
    }
    h1{
      color: #006400
    }
    p{
      color:#006400
    }
  </style>