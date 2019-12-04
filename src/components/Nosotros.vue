<template>
  <section id="nosotros">
    <b-container fluid id="nosotrosImage">
      <b-row align-v="center">
        <!--<b-col sm="12" md="6" class="p-0">
          <img class="img-fluid" src="../assets/quienes_somos.png" alt="Fun Image" />
        </b-col>-->
        <b-col offset-md="12" offset-lg="6" class="p-0 text-center" align-self="center">
          <b-container class="p-5" id="nosotrosBox">
            <img src="../assets/arrow.svg" alt="Orange Arrow" class="pt-2" id="orangeArrow1" />
            <div class="m-2" id="titleBox">
              <h1 class="text-muted text-uppercase rText">¿Quiénes Somos?</h1>
              <img src="../assets/arrow.svg" alt="Orange Arrow" class="pl-5" id="orangeArrow2" />
            </div>
            <div class="wrapper mx-2 rText">
              <h5 class="font-weight-bold">Somos fanáticos de hacer que tú te sientas bien.</h5>
              <div class="text-wrapper mt-4">
                <p class="text-muted">
                  Shakepoint nace con la idelogía de que con innovación y tecnología podemos
                  brindarle al mundo tu mejor versión. Un tú lleno de energía y vitalidad. Planeamos demostrar eso con
                  la calidad de nuestros puntos shakepoint y con los colores e imagen de nuestra marca.
                </p>
                <p class="text-muted">
                  Nuestra principal prioridad es darte el mejor servicio para que puedas disfrutar
                  de tus suplementos favoritos más rápido. Justo cuando y donde los necesitas.
                </p>
                <p class="text-muted">
                  Estamos comprometidos con la constante innovación de nuestra marca en todos los
                  rucursos posibles (tecnología, software, hardware, modelo de negocio, etc) para darte así cada vez la
                  oportunidad de disfrutar de tu mejor versión.
                </p>
              </div>
            </div>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  name: "Nosotros"
};

$(document).ready(function() {
  mediaSize();
});

function mediaSize() {
  $(".rText").toggleClass(
    "text-right",
    window.matchMedia("(min-width: 990px)").matches
  );
  $(".rText").toggleClass(
    "text-center",
    window.matchMedia("(max-width: 989px)").matches
  );
  $("#titleBox").toggleClass(
    "justify-content-end d-flex",
    window.matchMedia("(min-width: 990px)").matches
  );
}

mediaSize();
window.addEventListener("resize", mediaSize, false);
</script>

<style lang="scss" scope>
 #nosotros {
    height: 100vh;
  }
#nosotrosImage {
  background-image: url("../assets/quienes_somos.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 50%;
  height: 100vh;
}

#nosotrosBox {
  margin-top: 15%;
}
p {
  font-size: 16px;
}

#orangeArrow1 {
  display: none;
}
#orangeArrow2 {
  display: inline;
}



@media (max-width: 989px) {
  #nosotros {
    height: auto;
  }
  #nosotrosBox {
    margin-top: 50%;
  }

  #nosotrosImage {
    background-size: 80%;
  }
  #orangeArrow1 {
    transform: rotate(270deg);
    display: inline;
  }
  #orangeArrow2 {
    display: none;
  }
}

@media (max-width: 768px) {
  #nosotrosImage {
    background-size: 130%;
    background-position: 30% 0%;
    height: auto;
  }
  #nosotrosBox {
    margin-top: 100%;
  }
}
</style>