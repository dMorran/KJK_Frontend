<template>
  <div class="download" v-if="checkData">
    <h1 class="notice">File Metadata Has Been Scrambled!</h1>
    <button class="button is-info is-outlined">
      <a :href="fileData.data.link">Download</a>
    </button>
    <div class="notes">
      <h1 class="important">Important Notes!</h1>
      <div v-if="checkData">
        <div class="grey-box" id="copyBox">
          If you ever feel like un-scrambling your file back, then save the keys
          below, you will not see this again!
          <ul>
            <li>Filename: {{ fileData.data.filename }}</li>
            <li>Initialization vector: {{ fileData.data.recovery_vector }}</li>
            <li>Key: {{ fileData.data.recovery_key }}</li>
            <li>Shift Number: {{ fileData.data.recovery_shift_number }}</li>
          </ul>
          <button
            class="button is-info is-outlined is-small"
            @click="copyToClipboard()"
          >
            Copy Keys
          </button>
          <div class="tooltip" v-if="isCopied">Text Copied!</div>
        </div>
      </div>
      <div v-else>
        <h1>Scramble a file first!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  props: ["data"],
  data() {
    return {
      checkData: false,
      fileData: JSON.parse(this.data),
    };
  },
  mounted() {
    console.log(this.fileData);

    if (this.data) {
      this.checkData = true;
    }
  },
  methods: {
    copyToClipboard() {
      const copyText = document.getElementById("copyBox");
      const range = document.createRange();
      range.selectNode(copyText);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      Swal.fire("Text has been copied!");
    },
  },
};
</script>

<style>
@import "bulma/css/bulma.min.css";

h1.important {
  font-weight: bold;
  font-size: large;
}

h1.notice {
  font-size: large;
}

body {
  margin: 0; /* Hilangkan margin bawaan body */
}

.download {
  position: fixed;
  top: 2cm; /* Sesuaikan dengan margin-top */
  right: 1cm;
  left: 1cm;
  display: flex; /* Tambahkan display: flex; di sini */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Lebar elemen 100% */
  z-index: 1000; /* Atur z-index agar tetap di atas elemen lain */
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
  text-align: start;
}
</style>
