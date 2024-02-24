<!-- <template>
  <div class="confirm">
    <h1>仮登録完了</h1>
    <p>仮登録が完了しました。メールをご確認ください。</p>
    <button @click="$router.push('/')">戻る</button>
  </div>
</template> -->

<template>
  <div class="form-base">
    <div class="form-container bg-white p-8 rounded-lg shadow-md text-center">
      <p class="text-2xl font-bold underline mb-5">仮登録完了</p>
      <p class="text-xl mb-5">仮登録が完了しました。メールをご確認ください。</p>
      <div class="flex justify-end">
        <NuxtLink to="/" class="back_btn">戻る</NuxtLink>
      </div>
    </div>
  </div>
</template>
