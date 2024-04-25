<template>
  <div class="container">
    <h2 class="text-center mt-4 mb-4">Lista de Posts desde HomeView.vue</h2>
    <div class="row" v-for="(post, indice) of posts" v-bind:key="post.id">
      <div class="col">
        <h3>{{ post.title.charAt(0).toUpperCase() + post.title.slice(1) }}</h3>
        <!-- <h3 class="text-capitalize">{{ post.title }}</h3> -->
        <p class="ms-4 p-2 fst-italic">{{ post.body.charAt(0).toUpperCase() +  post.body.slice(1)}}</p>
      </div>
      <hr>
    </div>
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

<style></style>