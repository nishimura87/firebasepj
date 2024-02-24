<template>
  <div class="form-base">
    <div class="gap-4 w-1/2 form-container">
      <div class="flex flex-col items-center gap-4">
        <NuxtLink v-if="!isLoggedIn" class="btn" to="/register">新規登録</NuxtLink>
        <NuxtLink v-if="!isLoggedIn" class="btn" to="/login">ログイン</NuxtLink>
        <NuxtLink v-if="isLoggedIn" class="btn" to="/logout">ログアウト</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      isLoggedIn: false,
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.isLoggedIn = !!user;
    });
  },
}
</script>