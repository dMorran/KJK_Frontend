<template>
  <div class="app">
    <header class="app-header">
      <div class="container">
        <RouterLink class="judul" to="/">Scrambled</RouterLink>
        <nav>
          <RouterLink to="/unscramble"><p>Unscramble</p></RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
@import "bulma/css/bulma.min.css";
.app {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-header {
  background-color: #3498db;
  border-radius: 4px;
  position: fixed;
  width: 100%;
  padding: 2.5rem 1.25rem 1.5rem;
  color: #fff;
  font-family: "Righteous", cursive;
  top: 0;
}

.judul {
  font-size: 35px;
}

.container {
  display: flex;
  justify-content: space-between;
}

h1 {
  margin: 0;
}

nav {
  display: flex;
  font-size: 20px;
}

nav a {
  color: #0055c5;
  margin-right: 15px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}

main {
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  width: 50vh;
  margin: auto;
}

.router-link-exact-active {
  color: #f2f2f2;
}

</style>
