<template>
  <div class="container">
    <h2 class="text-center mt-4 mb-4">Lista de Posts desde HomeView.vue</h2>

    <div class="row" v-for="post of posts" v-bind:key="post.id">
      <div class="col">
        <h3>{{ post.title.charAt(0).toUpperCase() + post.title.slice(1) }}</h3>
        <!-- Autor -->
        <router-link v-bind:to="`/user/${post.userId}`">Autor</router-link>
      
        <p class="ms-4 p-2 fst-italic">{{ post.body.charAt(0).toUpperCase() +  post.body.slice(1)}}</p>
      </div>
      <hr>
    </div>
    <!-- https://jsonplaceholder.typicode.com/users/4 -->
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    data() {
      return {
        posts: [],
        comentarios: []
      }
    },
    methods: {
      async consumirApi() {
        try {
          const data = await fetch('https://jsonplaceholder.typicode.com/posts');
          const postsJsonPlaceHolder = await data.json();
          this.posts = postsJsonPlaceHolder;
        } catch (error) {
          console.log(error);
        }
     
      }
    },
    created() {
      this.consumirApi();
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #544E4E;
    background-color: bisque;
    padding: 3px 7px;
    border-radius: 5px;
  }
</style>