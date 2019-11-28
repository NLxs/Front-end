Vue.component('app-header', {
  props: [
    'initWork',
    'initShortBreak',
    'initLongBreak',
    'initRound'
  ],
  data() {
    return {
      isSidebarOpen: false 
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    filterChange(data) {
      this.$emit('change', data);
    } 
  },
  template: '#app-header',
  components: {
    'app-sidebar': {
      props: [
        'initWork',
        'initShortBreak',
        'isSidebarOpen'
      ],
      methods: {
        reset() {
          this.$emit('reset');
        },
        handleChange(event) {
          let data = event.target.dataset.type || e.srcElement.dataset.type;
          let value = Number(event.target.value) || Number(event.srcElement.value);

          this.$emit('change', { data: data, value: value });
        } 
      },
      template: '#app-sidebar' 
    } 
  } 
});

Vue.component('app-main', {
  props: [
    'isModalOpen',
    'isBreakTime',
    'minutes',
    'seconds'
  ],

  methods: {
    closeModal: function () {
      this.$emit('close-modal');
    } 
  },

  components: {
    'app-modal': {
      template: '#app-modal' 
    } 
  },
  template: '#app-main' 
});

Vue.component('app-footer', {
  props: [
    'isTimerActive'
  ],
  methods: {
    toggleTimer() {
      this.$emit('toggle-timer');
    },
    reset() {
      this.$emit('reset');
    },
    toggleModal() {
      this.$emit('toggle-modal');
    } 
  },
  template: '#app-footer'
});

let vm = new Vue({
  el: '#app',
  data() {
    return {
      // 时间长度
      initWork: 25,
      initShortBreak: 5,
      isBreakTime: false,
      isTimerActive: false,
      minutes: 25,
      seconds: '00',
      timer: null,
      round: 0,
      isModalOpen: false
    }
  },
  methods: {
    toggleModal: function () {
      this.isModalOpen = !this.isModalOpen;
    },
    resetSettings() {
      this.initWork = 25;
      this.initShortBreak = 5;
      this.isBreakTime ? this.minutes = this.initShortBreak : this.minutes = this.initWork;
    },
    resetUI() {
      this.isBreakTime = false;
      this.isTimerActive = false;
      this.minutes = this.initWork;
      this.seconds = '00';
      clearInterval(this.timer);
    },
    toggleTimer: function () {
      let self = this;
      function countDown() {
        let seconds = Number(self.$data.seconds);
        let minutes = self.minutes;
        let isBreak = self.isBreakTime;
        if (seconds === 0) {
          if (minutes === 0) {
            isBreak ? self.minutes = self.initWork : self.minutes = self.initShortBreak;
            self.isBreakTime = !self.isBreakTime;
          } else {
            self.minutes--;
            self.seconds = '59';
          }
        } else {
          seconds <= 10 ? self.seconds = `0${self.seconds - 1}` : self.seconds = `${self.seconds - 1}`;
        }
      }
      self.isTimerActive ? clearInterval(self.timer) : self.timer = setInterval(countDown, 1000);
      self.isTimerActive = !self.isTimerActive;
    },
    handleChange: function (obj) {
      let data = obj.data;
      let value = obj.value;
      switch (data) {
        case "work":
          this.initWork = value;
          if (!this.isBreakTime) {
            this.minutes = value;
            this.seconds = '00';
          }
          break;
        case "short-break":
          this.initShortBreak = value;
          if (this.isBreakTime) {
            this.minutes = value;
            this.seconds = '00';
          }
          break;
        }
    } 
  } 
});