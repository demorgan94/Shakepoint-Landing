<template>
  <div id="footer">
    <b-container fluid class="text-center">
      <b-row align-v="center" align-h="center">
        <b-col sm="12" md="6">
          <div class="wrapper text-left ml-4">
            <b-container class="pr-5">
              <p class="text-white">Shakepoint funciona por sociedad, si te interesa ser parte de un nuevo futuro,
                revolucionar la forma en la que tus clientes adquieren sus suplementos y hacerlo todo de una forma mas
                cool,
                eficaz e inteligente pues entonces "Make It Faster" con Shakepoint</p>
              <p class="text-orange mt-3">shakepoint@support.com.mx</p>
            </b-container>
          </div>
        </b-col>
        <b-col sm="12" md="2">
          <div class="social-media">
            <b-container>
              <b-col sm="6" md="12">
                <a href="https://www.instagram.com/shakepoint.mx/?hl=es-la" target="_blank"><img
                    src="../../assets/insta-logo.svg" alt="Insta Logo" class="img-fluid mb-2"></a>
              </b-col>
              <b-col sm="6" md="12">
                <a href="#" target="_blank"><img src="../../assets/face-logo.svg" alt="Facebook Logo"
                    class="img-fluid mt-2"></a>
              </b-col>
            </b-container>
          </div>
        </b-col>
        <b-col sm="12" md="4">
          <div class="wrapper2">
            <img src="../../assets/logo-shakepoint.svg" alt="Logo Shakepoint" class="img-fluid">
            <p class="text-muted text-center mt-3">&copy; 2019 Todos los derechos reservados</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scope>
  #footer {
    background-color: #000;

    .wrapper {
      margin: 5rem 0;

      .text-orange {
        color: #f79431;
      }
    }

    .social-media {
      border-right: 2px solid #fff;
    }
  }
</style>