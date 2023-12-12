<template>
  <div class="download" v-if="checkData">
    <h1>File Metadata Has Been Unscrambled!</h1>
    <button class="button is-normal">
      <a :href="fileData.data.link">Download</a>
    </button>
  </div>
  <div v-else>
    <h1>Submit the form <RouterLink to="/unscramble">here</RouterLink> first!</h1>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      checkData: false,
      fileData: JSON.parse(this.data)
    }
  },
  mounted() {
    console.log(this.fileData.data.link)

    if (this.data) {
      this.checkData = true
    }
  },
}

</script>

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

.notes {
  margin-top: 30px;
}

.grey-box {
  background-color: #f0f0f0;
  display: inline-block;
  padding: 25px;
  /* width: 40%; */
  margin: 20px auto;
  text-align: start;
}



</style>
