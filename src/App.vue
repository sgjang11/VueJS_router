<template>
  <div id="app">
    <div class="container">
      <router-link to="/">main</router-link>
      <router-link to="/word">word</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      crt:0
    }
  }
};
</script>

<style>
button {
  border: none;
  font-size: 30px;
  padding: 1rem 3rem;
  cursor: pointer;
  text-transform: uppercase;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container, .content {
  text-align: center;
  padding: 20px;
}
.content{
  height: 300px;
}
p {
  font-size: 12px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
#app>a {
  display: inline-block;
  text-decoration: none;
  color:#616161;
  padding:0 20px;
  background-color: rgb(205, 255, 147);
  line-height: 2;
}
#app>a.router-link-exact-active {
  background-color: #000;
  color:#fff
}
</style>
