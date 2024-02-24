<template>
  <div class="form-base">
    <div class="form-container bg-white p-8 rounded-lg shadow-md">
        <label class="block mb-4">
          メールアドレス：<input v-model="email" type="email" autocomplete="off" class="input" required />
        </label>
        <label class="block mb-8">
          パスワード：<input v-model="password" type="password" autocomplete="new-password" class="input" required />
        </label>
        <div class="flex justify-between">
          <button class="btn" @click="register">新規登録</button>
          <NuxtLink to="/" class="back_btn">戻る</NuxtLink>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    register() {
      if (!this.email || !this.password) {
        alert("メールアドレスまたはパスワードが入力されていません。");
        return;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.sendEmailVerification().then(() => {
            this.$router.replace("/confirm");
          });
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              alert("メールアドレスの形式が違います。");
              break;
            case "auth/email-already-in-use":
              alert("このメールアドレスはすでに使われています。");
              break;
            case "auth/weak-password":
              alert("パスワードは6文字以上で入力してください。");
              break;
            default:
              alert("エラーが起きました。しばらくしてから再度お試しください。");
              break;
          }
        });
    },
  },
};
</script>