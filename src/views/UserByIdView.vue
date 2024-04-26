<template>  
  <div class="container mt-5">
    <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nick</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Sitio Web</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address.street }}</td>
            <td>{{ user.website }}</td>
          </tr>
        </tbody>
    </table>
  </div>
  
 
 
</template>


<script>
  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      async getAutor() {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
        const response = await data.json();

        if(!response.ok) {
          console.error(`HTTP error! status: ${response.status}`);
        }

        this.user = response;
        console.log(this.user);
      }
    },
    created() {
      this.getAutor();
    }
  }
</script>


<style>
</style>