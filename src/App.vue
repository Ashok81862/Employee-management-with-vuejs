<template>
  <div id="app" class="">
    <!--navbar-->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <router-link class="navbar-brand" to="/">EmployeeManagement</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/departments">Department</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/employees">Employee</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <!--navbar end-->
      <div class="container">
        <router-view />
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
