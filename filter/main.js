new Vue({
  el: "#vue-table",
  data() {
    return {
      sortKey: '',
      search: '',
      reverse: false,
      columns: ['姓名', '年龄'],
      people: [
        { name: 'user1', age: 18 },
        { name: 'nuolu', age: 23 },
        { name: 'fwh', age: 20 },
        { name: 'liziran', age: 35 },
        { name: 'yueying', age: 37 }
      ]
    }
  },
  methods: {
    sortBy: function(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
      this.sortKey = sortKey;
    }
  }
})