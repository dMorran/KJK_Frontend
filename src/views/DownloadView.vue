<template>
  <div class="download">
    <h1>File Metadata Has Been Scrambled!</h1>
    <button class="button is-normal">
      <RouterLink to="/Load">Download</RouterLink>
    </button>
    <h1>Important Notes!</h1>
    <div class="grey-box">
      If you ever feel like un-scrambling your file back, then save the keys
      below, you will not see this again!
      <li>Initialization vector:</li>
      <li>Key:</li>
      <li>Shift Number:</li>
    </div>
  </div>
</template>
<style>
@import "bulma/css/bulma.min.css";

.download {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.button {
  margin-top: 10px;
  display: block;
  margin-bottom: 10px;
}

.grey-box {
  background-color: #f0f0f0;
  display: inline-block;
  padding: 25px;
  /* width: 40%; */
  margin: 20px auto;
}

li {
  margin-left: 30px;
}
</style>
