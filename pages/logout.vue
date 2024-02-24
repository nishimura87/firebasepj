<template>
  <div class="form-base">
    <div class="form-container bg-white p-8 rounded-lg shadow-md">
      <div class="flex justify-between">
        <button class="btn" @click="logout">ログアウト</button>
        <NuxtLink to="/" class="back_btn">戻る</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/');
      }).catch((error) => {
        console.error('ログアウトに失敗しました', error);
      });
    },
  },
}
</script>