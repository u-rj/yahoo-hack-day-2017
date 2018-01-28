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
    <div class="button" @click="report">通報する</div>
    <img :src="image">
  </div>
</template>

<script>

import jquery from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      image: '',
      notifyVar: null
    }
  },
  methods: {
    notify () {
      if (Notification.permission === 'default') {
        Notification.requestPermission()
      }
      this.notifyVar = new Notification('危険運転を検知しました。')
    },
    report () {
      jquery.ajax({
        type: 'POST',
        url: 'https://yahoohack2017.herokuapp.com/api/reckless_driving/report',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          images: [this.image]
        })
      }).done((response) => {
        alert('通報しました')
        location.reload()
      })
    }
  },
  mounted () {
    // this.notify()

    setInterval(() => {
      jquery.ajax({
        type: 'GET',
        url: 'https://yahoohack2017.herokuapp.com/api/ng_check',
        contentType: 'application',
        dataType: 'json'
      }).done((response) => {
        if (response['is_ng']) {
          localStorage.removeItem('car-image')
          this.image = response.image
          // this.notify()
        } else {
        }
      })
    }, 2000)
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
.button {
  background: #ffd42a;
  text-align: center;
  font-size: 30px;
  color: white;
  padding: 20px 0;
}
.video {
 position: fixed;
 left: 0;
 top: 0;
 width: 900px;
 height: 600px;
}
.alert {
 position: fixed;
 left: 300px;
 top: 100px;
 width: 250px;
}
</style>
