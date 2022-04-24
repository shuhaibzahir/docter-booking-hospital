<template>
  <div>
    <nav class="navbar navbar-dark bg-success">
      <div class="container-fluid px-md-5">
       <router-link to="/" style="text-decoration:none; font-size:1.5rem;" class="text-white"> Hospital Admin </router-link>
        <span
          data-bs-toggle="offcanvas"
          role="button"
          class="text-white"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          ><i class="fa-solid fa-bars"></i
        ></span>
      </div>
    </nav>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Menu</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
          <nav>
              <div class="d-flex flex-column ">
                  <router-link to="/" class="btn btn-outline-dark my-2 ">Dashboard</router-link>
                  <router-link to="/add/doctor" class="btn btn-outline-dark my-2">Add Doctor</router-link>
                  <router-link to="/" class="btn btn-outline-dark my-2">Dashboard</router-link>
                  <router-link to="/" class="btn btn-outline-dark my-2">Dashboard</router-link>
                  <router-link to="/" class="btn  btn btn-danger my-2">Logout</router-link>
              </div>
          </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
