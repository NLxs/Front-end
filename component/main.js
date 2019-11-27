Vue.component('media-post',{
  props: ['image', 'title', 'user'],
  template: `
    <figure class="media-post">
      <img :src="image" :alt="title" width="400" height="400" />
      <figcaption>
        <h2 v-if="title">{{title}}</h2>
        <em v-if="user">By {{user}}</em>
      </figcaption>
    </figure>
  `
});

new Vue({
  el: '#app',
  template: `
    <div class="media-gallery">
      <media-post 
        v-for="post in posts" 
        :image="post.image" 
        :title="post.title" 
        :user="post.user" />
    </div>
  `,
  data() {
    return {
      posts: [
        {
          image: './images/1.jpeg',
          title: "Delicious",
          user: "Fadwa"
        },
        {
          image: './images/2.jpeg',
          title: "Tasty",
          user: "Grant"
        },
        {
          image: './images/3.jpeg',
          title: "Scrumptious",
          user: "Cameron"
        },
        {
          image: './images/4.jpeg',
          title: "Delectible",
          user: "Jenny"
        }
      ]
    }
  }
});