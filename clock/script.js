new Vue({
  el: '#app',
  data() {
    return {
      msg: '当前时间',
      currentTime: null
    }
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = moment().format('LTS');
    }
  },
  created() {
    this.currentTime = moment().format('LTS');
    setInterval(() => this.updateCurrentTime(), 1 * 1000)
  }
}) 