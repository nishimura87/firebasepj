<template>
  <div class="form-base">
    <div class="form-container bg-white p-8 rounded-lg shadow-md">
      <label class="block mb-4">
        メールアドレス：<input v-model="email" type="email" class="input" required />
      </label>
      <label class="block mb-8">
        パスワード：<input v-model="password" type="password" class="input" required />
      </label>
      <div class="flex justify-between">
        <button class="btn" @click="login">ログイン</button>
        <NuxtLink to="/" class="back_btn">戻る</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}
</script>