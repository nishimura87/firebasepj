<template>
  <div class="container mx-auto border border-gray-300 rounded-lg custom-height my-10 p-10 bg-slate-100">
    <header class="text-center">
      <h1 class="text-4xl font-bold underline">ホーム</h1>
      <h2 class="text-2xl">~Firebase Auth~</h2>
      <p class="text-xl mb-4 text-right w-11/12">{{ message }}</p>
    </header>

    <Nuxt class="mt-28"/> <!-- ページコンテンツがここに挿入されます -->

    <footer>
      <!-- フッターコンテンツ -->
    </footer>
  </div>
</template>

<style>
.form-base{
  @apply flex items-center justify-center
}

.form-container {
  @apply w-full max-w-2xl mx-auto ;
}

.btn {
  @apply px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700;
}

.back_btn{
  @apply px-4 mt-4 inline-block border border-gray-300 rounded-lg
}

.input {
  @apply block w-full px-2 py-2 mt-1 border rounded border-gray-300;
}

.custom-height {
  height: calc(100vh - 5rem);
}
</style>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      message: 'ログインができておりません',
    }
  },
  created() {
    this.unsubscribeAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.message = 'ログイン済みです';
      } else {
        // ユーザーがログアウトした場合もメッセージを更新
        this.message = 'ログインができておりません';
      }
    });
  },
  beforeDestroy() {
    // コンポーネントが破棄される前にオブザーバーを解除
    if (this.unsubscribeAuthObserver) {
      this.unsubscribeAuthObserver();
    }
  },
}
</script>
</script>
