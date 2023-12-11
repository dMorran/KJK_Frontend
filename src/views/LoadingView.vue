<template>
  <div class="loading-container">
    <div class="loader"></div>
    <div class="wait-message">Getting Ready...</div>
    <div class="wait-message">Your file is being scrambled</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Transparan dengan latar putih */
  display: flex;
  flex-direction: column; /* Menyusun elemen secara vertikal */
  align-items: center;
  justify-content: center;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

.wait-message {
  margin-top: 20px; /* Menambah jarak antara spinner dan teks */
  font-size: 18px;
  font-weight: bold;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
