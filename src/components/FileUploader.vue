<template>
  <div class="file-uploader">
    <div class="upload-area">
      <label for="file-input" class="file-label">
        <div class="drop-area" @drop.prevent="onDrop" @dragover.prevent>
          <div class="icon">🗂️</div>
          <div class="text">
            <span v-if="uploadedFiles.length === 0">Drop files here or </span>
            <span
              class="select-files"
              v-if="uploadedFiles.length === 0"
              @click="selectFiles"
              >Select files</span
            >
          </div>
          <ul class="file-list" v-if="uploadedFiles.length > 0">
            <li v-for="(file, index) in uploadedFiles" :key="index">
              {{ file.name }}
            </li>
          </ul>
        </div>
      </label>
      <input
        type="file"
        id="file-input"
        ref="fileInput"
        @change="onFilesSelected"
        multiple
        style="display: none"
      />
    </div>
    <div class="options-area">
      <input type="checkbox" id="custom-key" v-model="useCustomKey" />
      <label for="custom-key">Provide your own key</label>
      <div v-if="useCustomKey" class="key-options">
        <input
          type="text"
          placeholder="Initialization Vector (16 hexadecimal bytes)"
        />
        <input type="text" placeholder="Key (32 hexadecimal bytes)" />
        <input type="number" placeholder="Shift number (1-10)" />
      </div>
      <div class="scramble-options">
        <button @click="scrambleFiles">Scramble</button>
        <button @click="unscrambleFiles">Unscramble</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useCustomKey: false,
      uploadedFiles: [], // Array to store uploaded files
    };
  },
  methods: {
    selectFiles() {
      // Trigger the file input element
      this.$refs.fileInput.click();
    },
    onFilesSelected(event) {
      const files = event.target.files;
      this.uploadedFiles = Array.from(files); // Store the selected files
    },
    onDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      this.uploadedFiles = Array.from(files); // Store the dropped files
    },
    scrambleFiles() {
      // Handle scrambling files
    },
    unscrambleFiles() {
      // Handle unscrambling files
    },
    async scrambleFiles() {
      // Menampilkan halaman loading
      this.$router.push({ name: "loading" });

      // Lakukan proses penyiapan dan pemrosesan file di sini
      // Misalnya, pemanggilan API atau operasi file yang kompleks

      // Tambahkan logika penyelesaian pemrosesan file di sini

      // Menyembunyikan halaman loading setelah pemrosesan selesai
      this.$router.replace({ name: "fileUploader" });
    },
  },
};
</script>

<style scoped>
.file-uploader {
  max-width: 500px;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.upload-area {
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  background-color: #f9f9f9;
  cursor: pointer;
}

.upload-area:hover {
  border-color: #2563eb;
}

.file-label {
  display: block;
}

.drop-area {
  padding: 30px 0;
}

.icon {
  font-size: 48px;
}

.text {
  font-size: 16px;
  color: #666;
}

.select-files {
  color: #2563eb;
  text-decoration: underline;
}

.options-area {
  text-align: left;
  margin-top: 10px;
}

#custom-key {
  margin-right: 10px;
}

.key-options input {
  display: block;
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

.key-options input[type="number"] {
  -moz-appearance: textfield;
}

.key-options input[type="number"]::-webkit-inner-spin-button,
.key-options input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.scramble-options {
  margin-top: 20px;
}

.scramble-options button {
  padding: 10px 20px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.scramble-options button:hover {
  background-color: #1c4fa9;
}

.file-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.file-list li {
  margin-bottom: 5px;
}

.select-files {
  color: #2563eb;
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
}
</style>
