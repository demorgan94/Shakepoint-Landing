<template>
  <div id="footer">
    <b-container fluid class="text-center">
      <b-row align-v="center" align-h="center">
        <b-col sm="12" md="6">
          <div class="wrapper ml-4" id="lText">
            <b-container class="pr-5">
              <p class="text-white">
                Shakepoint funciona por sociedad. Si te interesa ser parte de un nuevo futuro,
                revolucionar la forma en la que tus clientes adquieren sus suplementos y hacerlo todo de una forma más
                cool, eficaz e inteligente pues entonces
                <i>Make It Faster</i> con Shakepoint.
              </p>
              <img
                src="../../assets/arrow.svg"
                alt="Orange Arrow"
                class="text-center mt-5 mb-4"
                id="orangeArrow3"
              />
              <a
                class="text-orange mt-3"
                href="mailto:shakepoint@support.com.mx"
              >shakepoint@support.com.mx</a>
            </b-container>
          </div>
        </b-col>
        <b-col sm="6" md="2" cols="6">
          <div class="social-media">
            <b-container>
              <b-row>
                <b-col sm="6" md="12" cols="6">
                  <a href="#" target="_blank">
                    <img src="../../assets/face-logo.svg" alt="Facebook Logo" id="fIcon"/>
                  </a>
                </b-col>
                <b-col sm="6" md="12" cols="6">
                  <a href="https://www.instagram.com/shakepoint.mx/?hl=es-la" target="_blank">
                    <img src="../../assets/insta-logo.svg" alt="Insta Logo" id="iIcon"/>
                  </a>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-col>
        <b-col sm="12" md="4">
          <div class="wrapper2">
            <img src="../../assets/logo-shakepoint.svg" alt="Logo Shakepoint" class="img-fluid" />
            <p class="text-muted text-center mt-3">&copy; 2019 Todos los derechos reservados</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Footer"
};
$(document).ready(function() {
  mediaSize()
});
function mediaSize() {
  $('#lText').toggleClass('text-left', window.matchMedia('(min-width: 767px)').matches);
  $('#lText').toggleClass('text-center', window.matchMedia('(max-width: 766px)').matches);
  $('#fIcon').toggleClass('mb-2', window.matchMedia('(min-width: 767px)').matches);
  $('#iIcon').toggleClass('mt-2', window.matchMedia('(min-width: 767px)').matches);
  $('.wrapper2, .social-media').toggleClass('p-5', window.matchMedia('(max-width: 766px)').matches);
}

mediaSize();
window.addEventListener("resize", mediaSize, false);
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
    border-bottom: 0px;
  }
  #orangeArrow3 {
    display: none;
  }

  @media (max-width: 767px) {
    #orangeArrow3 {
      transform: rotate(270deg);
      display: block;
      margin: auto;
      width: 25px;
    }
    .social-media {
      border-bottom: 2px solid #fff;
      border-right: 0px;
    }
  }
}
</style>