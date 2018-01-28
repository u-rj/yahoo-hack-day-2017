<template>
  <div class="hello">
    <!--
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    -->
    <video class="video" id="video"></video>
    <img v-show="false" id="image">
    <canvas v-show="false" id="canvas"></canvas>
    <div v-show="alertType > 0" class="alert">
      <div v-show="alertType === 1">
        <img src="../assets/alert.png">
        <p>あおり運転を検知しました<br>
        後方の車両に注意してください（仮）</p>
      </div>
      <div v-show="alertType === 2">
        <img src="../assets/alert.png">
        <p>集中度が低いです<br>
        運転を止めて休憩してください（仮）
        </p>
      </div>
      <div v-show="alertType === 3">
        <img src="../assets/alert.png">
        <p>１分後は危険度が高い地点です<br>
        走行に注意してください（仮）
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import jquery from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      video: null,
      already: false,
      warn: false,
      nearImage: '',
      apiFirstAccess: 0,
      alertType: 0
    }
  },
  methods: {
    notify () {
      if (Notification.permission === 'default') {
        Notification.requestPermission()
      }
      Notification('危険運転を検知しました。')
    },
    camera () {
      if (this.already) return
      this.already = true
      let video = document.querySelector('#video')
      navigator.getUserMedia({video: true, audio: false}, (stream) => {
        console.log(stream)

        video.src = window.URL.createObjectURL(stream)
      }, (err) => {
        console.log('video', err)
      })
      setInterval(() => {
        this.cameraImage()
      }, 1000)
    },
    cameraImage () {
      let video = document.querySelector('#video')
      let canvas = document.querySelector('#canvas')
      let ctx = canvas.getContext('2d')

      let w = video.offsetWidth
      let h = video.offsetHeight

      canvas.setAttribute('width', w)
      canvas.setAttribute('height', h)

      ctx.drawImage(video, 0, 0, w, h)

      let imageUrl = canvas.toDataURL('image/jpeg')
      jquery.ajax({
        type: 'POST',
        url: 'https://yahoohack2017.herokuapp.com/api/detect',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          image: imageUrl
        })
      }).done((response) => {
        if (this.apiFirstAccess < 5) {
          this.apiFirstAccess += 1
          return
        }
        this.alertType = (response.predict === 'near') ? 1 : 0
        console.log('ok', response.predict, this.alertType)

        // if (!this.warn) return
        // localStorage.setItem('car-image', imageUrl)
      })
    }
  },
  mounted () {
    let alternate = 0
    let animate = () => {
      // let top = (window.scrollTop) ? window.scrollTop : document.scrollTop
      // top = alternate
      jquery('body, html').scrollTop(alternate)
      alternate = (alternate === 0) ? 1 : 0
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
    // this.notify()
    this.camera()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  padding: 0;
  margin: 0;
}
.video {
 position: fixed;
 left: 0;
 top: 0;
 width: 800px;
 height: 600px;
}
.alert {
 position: fixed;
 left: 0;
 top: 0;
 width: 100vw;
 height: 100vh;
 background: rgba(0,0,0,0.7);
 text-align: center;
 padding-top: 15vh;
}
.alert img {
  width: 15vw;
  margin-bottom: 5vh;
}
.alert p {
  font-size: 70px;
  color: #FED340;
  line-height: 1.2;
  font-weight: bold;
}
</style>

