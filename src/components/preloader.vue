<template>
  <div class="page-loader">
    <div class="loader"></div>
    <p class="text">Загрузка ...</p>
    <span>Примерно секнунд 10-20</span>
    <span>{{sec}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sec: 0,
      timer: null
    }
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.sec++
      }, 1000)
    },
    stopTimer() {
      clearTimeout(this.timer)
    }
  },
  mounted() {
    this.startTimer()
  },
  destroyed() {
    this.stopTimer()
  }
}
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
aside,
nav,
footer,
header,
section {
  display: block;
}
html,
body {
  height: 100%;
  min-width: 320px;
}
body {
  line-height: 1;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

@function size($px, $width){
  $result: ($px / $width) * 100vw;
  @return $result;
}



//preloader

.page-loader{
  display:  flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 60%;
  z-index: 999;
  .text{
    color: white;
    font-weight: 800;
    font-size: size(45, 1920);
  }
  span{
    color: #a5a5a5;
  }
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
