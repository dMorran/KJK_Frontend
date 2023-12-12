<template>
  <div class="file-uploader">
    <div class="text-area">
      Fill the details with the ones you're given when you scrambled your image here!
    </div>
    <div class="options-area">
      <div class="key-options">
        <input type="text" placeholder="Filename" required v-model="filename"/>
        <input type="text" placeholder="Initialization Vector (16 hexadecimal bytes)" required v-model="iv"/>
        <input type="text" placeholder="Key (32 hexadecimal bytes)" required v-model="key"/>
        <input type="number" placeholder="Shift number (1-10)" required v-model="shift"/>
      </div>
      <div class="scramble-options">
        <button @click="unscrambleFiles">Unscramble</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import toast from 'vue-toast-notification'

export default {
  data() {
    return {
      filename: '',
      iv: '',
      key: '',
      shift: 0,
    };
  },
  methods: {
    async unscrambleFiles() {
      
      let instance = this.$toast
      const hexRegex = /^[0-9a-fA-F]+$/;

      const cleanedIV = this.iv.replace(/\s/g, '');
      const cleanedKey = this.key.replace(/\s/g, '');

      if (!hexRegex.test(cleanedIV) || cleanedIV.length !== 32) {
        console.error("Invalid 'iv'. It should be a 16 bytes hexadecimal string.");
        instance.open({
          message: 'Something went wrong!',
          type: 'error',
          duration: 300,
          position: "top"
        })
        return;
      }
      
      if (!hexRegex.test(cleanedKey) || cleanedKey.length !== 64) {
        console.error("Invalid 'key'. It should be a 32 bytes hexadecimal string.");
        return;
      }
      
      if (0 > this.shift || this.shift >= 10) {
        console.error("input a number in the range of 1-10")
        return;
      }
      
      let formData = new FormData();

      formData.append('iv', this.iv);
      formData.append('key', this.key);
      formData.append('shift', this.shift);

      try {
        await axios.post(`http://localhost:3000/original/${this.filename}`, formData)
        .then((response) => {
          console.log(response.data)
          this.$router.push({
            name: "dl-unscrambled",
            params: {
              data: JSON.stringify(response.data)
            }
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
.file-uploader {
  max-width: 500px;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.text-area {
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  background-color: #f9f9f9;
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

#shiftnum, .key-options input {
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
