console.clear();

new Vue({
  el: '#app',
  data() {
    return {
      textInput: "hello world"
    }
  },

  filters: {
    uppercase: function (value) {
      return value.toUpperCase();
    },
    
    lowercase: function (value) {
      return value.toLowerCase();
    },
    
    reverse: function (value) {
      return value.split('').reverse().join('');
    },

    titlecase: function (value) {
      value = value.toLowerCase().split(' ');
      return value.map( word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    },
    
    piglatin: function (value) {
      value = value.toLowerCase().split(' ');
      return value.map( word => {
        return word.slice(1) + word.charAt(0) + 'ay';
      }).join(' ');
    }
  }
});