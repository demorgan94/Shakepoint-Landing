<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="faded" fixed="top">
      <b-container>
        <b-navbar-brand to="/">
          <img src="@/assets/logo-nav.svg" alt="Shakepoint Logo" class="navbar-logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <a class="nav-link" href="#nosotros" v-smooth-scroll>Nosotros</a>
            <a class="nav-link" href="#pasos" v-smooth-scroll>Función</a>
            <a class="nav-link" href="#contacto" v-smooth-scroll>Contacto</a>
            <b-nav-item to="/" disabled>Miembros</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>
</template>

<script>
  import $ from 'jquery';
  export default {
    name: "Navbar"
  }

  $(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 950);
  });
</script>

<style lang="scss" scope>
  #nav-collapse {
    text-align: center;
  }

  .nav-link {
    font-size: 20px;
    margin-left: 1.2rem;
  }

  .scrolled {
    background-color: rgb(39, 39, 39);
    -webkit-transition: background-color 400ms linear;
    -ms-transition: background-color 400ms linear;
    transition: background-color 400ms linear;
    z-index: 9;
  }
</style>