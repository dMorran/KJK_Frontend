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
    <div>
      <label for="shiftnum">Shift number: </label>
      <input
        id="shiftnum"
        type="number"
        v-model="shift"
        placeholder="Enter a shift number in a 1-10 range"
        max="10"
        min="1"
      />
    </div>
    <div class="options-area">
      <input type="checkbox" id="custom-key" v-model="useCustomKey" />
      <label for="custom-key">Provide your own key</label>
      <div v-if="useCustomKey" class="key-options">
        <input
          type="text"
          placeholder="Initialization Vector (16 hexadecimal bytes)"
          v-model="iv"
        />
        <input
          type="text"
          placeholder="Key (32 hexadecimal bytes)"
          v-model="key"
        />
      </div>
      <div class="scramble-options">
        <button @click="scrambleFiles">Scramble</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      useCustomKey: false,
      uploadedFiles: [], // Array to store uploaded files
      iv: "",
      key: "",
      shift: 0,
      // file: null
    };
  },
  methods: {
    selectFiles() {
      this.$refs.fileInput.click();
    },
    onFilesSelected(event) {
      const files = event.target.files;
      this.uploadedFiles = Array.from(files);
    },
    onDrop(event) {
      event.preventDefault();
      const files = event.dataTransfer.files;
      this.uploadedFiles = Array.from(files);
    },
    unscrambleFiles() {
      // Handle unscrambling files
    },
    async scrambleFiles() {
      this.$router.push({ name: "loading" });

      if (0 > this.shift || this.shift >= 10) {
        console.error("input a number in the range of 1-10");
        return;
      }

      let formData = new FormData();

      if (this.useCustomKey === true) {
        formData.append("file", this.uploadedFiles[0]);
        formData.append("iv", this.iv);
        formData.append("key", this.key);
        formData.append("shift", this.shift);
        formData.append("provide", "false");

        const hexRegex = /^[0-9a-fA-F]+$/;
        if (!hexRegex.test(this.iv) || this.iv.length !== 32) {
          console.error(
            "Invalid 'iv'. It should be a 16 bytes hexadecimal string."
          );
          return;
        }

        if (!hexRegex.test(this.key) || this.key.length !== 64) {
          console.error(
            "Invalid 'key'. It should be a 32 bytes hexadecimal string."
          );
          return;
        }
      } else {
        formData.append("file", this.uploadedFiles[0]);
        formData.append("provide", "true");
        formData.append("shift", this.shift);

        console.log(formData);
      }

      try {
        axios
          .post("http://localhost:3000/upload", formData)
          .then((response) => {
            console.log(response.data);
            this.$router.push({
              name: "download",
              params: {
                data: JSON.stringify(response.data),
              },
            });
          });
      } catch (error) {
        console.error("Error uploading file", error);
      }
    },
  },
};
</script>

<style scoped>
body {
  margin-top: 3cm;
}
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

#shiftnum,
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
