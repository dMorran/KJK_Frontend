<template>
  <div class="up">
    <h2 class="upload-header">Upload Your File Here!</h2>
    <FileUploader />
  </div>
</template>

<script>
import FileUploader from "@/components/FileUploader.vue";

export default {
  components: {
    FileUploader,
  },
};
</script>

<style scoped>
.up {
  margin-top: 3rem; /* Menambahkan margin atas untuk menghindari tumpang tindih dengan header */
}

.upload-header {
  margin-bottom: 20px;
}
</style>
