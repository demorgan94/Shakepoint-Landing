<template>
  <div id="header">
    <header>
      <b-container>
        <b-row align-v="center" align-h="center">
          <b-col>
            <img class="mx-auto d-block logo-header img-fluid" src="../assets/logo-shakepoint.svg"
              alt="Logo Shakepoint">
            <h1 class="text-center slogan">MAKE IT FASTER</h1>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scope>
  html,
  body {
    height: 100%;
  }

  #header::before {
    content: '';
    position: absolute;
    background-image: url('../assets/gimnasio.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    filter: brightness(30%);
  }

  #header {
    height: 100%;

    header {
      height: 93%;
      width: 100%;
    }

    .container,
    .row {
      height: 100%;

      .logo-header {
        width: 50%;
      }

      h1 {
        color: #fff;
        margin-top: 2rem;
        font-style: italic;
      }

      .logo-header {
        animation: fade-in-move-down 3s;
      }

      .slogan {
        animation: fade-in-move-up 3s;
      }

      @keyframes fade-in-move-down {
        0% {
          opacity: 0;
          transform: translateY(-5rem);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fade-in-move-up {
        0% {
          opacity: 0;
          transform: translateY(5rem);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
</style>