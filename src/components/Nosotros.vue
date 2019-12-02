<template>
  <section id="nosotros">
    <b-container fluid>
      <b-row align-v="center">
        <b-col sm="12" md="6" class="p-0">
          <img class="img-fluid" src="../assets/quienes_somos.png" alt="Fun Image" />
        </b-col>
        <b-col sm="12" md="6" class="p-0 text-center">
          <b-container class="p-5">
            <img src="../assets/arrow.svg" alt="Orange Arrow" class="pl-5 " id="orangeArrow1" />
            <div class="d-flex justify-content-end m-2">
              <h1 class="text-muted text-uppercase">¿Quiénes Somos?</h1>
              <img src="../assets/arrow.svg" alt="Orange Arrow" class="pl-5" id="orangeArrow2" />
            </div>
            <div class="wrapper mx-2 text-right" id="rText">
              <h5 class="font-weight-bold">Somos fanáticos de hacer que tu te sientas bien.</h5>
              <div class="text-wrapper mt-4">
                <p class="text-muted">
                  Shakepoint nace con la idelogía de que con innovación y tecnología podemos
                  brindarle al mundo tu mejor versión, un tú lleno de energía y vitalidad. Planeamos demostrar eso con
                  la calidad de nuestros puntos shakepoint y conlos colores e imagen de nuestra marca.
                </p>
                <p class="text-muted">
                  Nuestra principal prioridad es darte el mejor servicio para que puedas disfrutar
                  de tus suplementos favoritos más rápido, justo cuando y donde los necesitas.
                </p>
                <p class="text-muted">
                  Estamos comprometidos con la constante innovación de nuestra marca en todos los
                  ruvros posibles(tecnología, software, hardware, modelo de negocio, etc) para darte así cada ves la
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
import $ from 'jquery';

export default {
  name: "Nosotros"
};

function mediaSize() { 
		if (window.matchMedia('(min-width: 768px)').matches) {
			$('#rText').addClass('text-right');
        $('#rText').removeClass('text-center');

		} else {
		$('#rText').addClass('text-center');
        $('#rText').removeClass('text-right');
		}
	};
	
  mediaSize();
	window.addEventListener('resize', mediaSize, false);  
</script>

<style lang="scss" scope>
p {
  font-size: 16px;
}

#orangeArrow1 {
  display: none;
}
#orangeArrow2 {
  display: inline;
}

@media (max-width: 768px) {
  #orangeArrow1 {
    transform: rotate(270deg);
    display: inline;
  }
  #orangeArrow2 {
    display: none;
  }
}


</style>