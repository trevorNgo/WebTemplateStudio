//TODO Web Template Studio: Add a new link in the NavBar for your page here.
<template>
  <nav class="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
    <a class="navbar-brand" href="/">Project Name</a>
    <div class="navbar-nav">
      <router-link class="nav-item nav-link active" to="/masterdetail">Master Detail</router-link>
      <router-link class="nav-item nav-link active" to="/grid">Grid</router-link>
      <router-link class="nav-item nav-link active" to="/list">List</router-link>
      <router-link class="nav-item nav-link active" to="/blank">Blank</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
