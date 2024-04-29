<template>
  <div class="container">
    <h2 class="text-center mt-4 mb-4">Lista de Posts desde HomeView.vue</h2>

    <div class="row" v-for="post of posts" v-bind:key="post.id">
      <div class="col">
        <h3>{{ post.title.charAt(0).toUpperCase() + post.title.slice(1) }}</h3>
        <!-- Autor -->
        <router-link v-bind:to="`/user/${post.userId}`">Autor</router-link>

        <p class="ms-4 p-2 fst-italic">{{ post.body.charAt(0).toUpperCase() + post.body.slice(1) }}</p>

        <button class="btn btn-secondary mb-4" @click="comentarios(post.id)"> Ver comentarios</button>
      </div>
     
      <template v-for="cFiltrado of comentariosFiltrados" :key="cFiltrado.id">
          <div class="mt-3 col-sm-10 offset-sm-1" v-if="cFiltrado.postId === post.id">
            <p>User: {{ cFiltrado.email }}</p>
            <br>
            <p>Respuesta:</p>
            <p>{{ cFiltrado.body }}</p>
          </div>
      </template>
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
      comentariosFiltrados: [],
      comentariosCache: {}
    }
  },
  methods: {
    async comentarios(id) {

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

        if (!response.ok) {
          console.error(`Http ERROR Status Code: ${response.status}`);
          return;
        }

        const data = await response.json();
        this.comentariosCache[id] = data;
        this.comentariosFiltrados = data;
        console.log(this.comentariosFiltrados);
      } catch (error) {
        console.error("Error al cargar los comentarios", error)
      }

    }
    ,
    toggleComentarios(id) {
      const post = this.posts.find(post => post.id == id)
      console.log(post);
    },
    async consumirApi() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          console.error(`Http ERROR Status Code: ${response.status}`);
          return;
        }
        const postsJsonPlaceHolder = await response.json();
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