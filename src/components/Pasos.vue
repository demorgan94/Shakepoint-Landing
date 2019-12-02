<template>
  <section id="pasos">
    <b-container fluid>
      <b-row align-v="center" align-h="center">
        <b-col sm="6" md="4" cols="6" class="p-0" order="2" order-md="1">
          <div class="numbers d-flex flex-column justify-content-center">
            <img src="../assets/uno.png" alt="Number One" class="img-fluid number" />
            <p class="text-center text-muted">Descarga la app de SHAKEPOINT</p>
            <br />
            <img src="../assets/dos.png" alt="Number Two" class="img-fluid number" />
            <p class="text-center text-muted">Registrate o Inicia Sesión</p>
            <br />
            <img src="../assets/tres.png" alt="Number Three" class="img-fluid number" />
            <p class="text-center text-muted">Elige el producto que quieras</p>
            <br />
          </div>
        </b-col>
        <b-col sm="12" md="4" cols="12" class="p-0" order="1" order-md="2">
          <img src="../assets/Machine_GIF.gif" alt class="img-fluid" />
        </b-col>
        <b-col sm="6" md="4" cols="6" class="p-0" order="2" order-md="3">
          <div class="numbers d-flex flex-column justify-content-center">
            <img src="../assets/cuatro.png" alt="Number One" class="img-fluid number" />
            <p class="text-center text-muted">Elige o da de alta tu tarjeta</p>
            <br />
            <img src="../assets/cinco.png" alt="Number Two" class="img-fluid number" />
            <p class="text-center text-muted">Escanea el QR</p>
            <br />
            <img src="../assets/seis.png" alt="Number Three" class="img-fluid number" />
            <p class="text-center text-muted">¡Disfruta!</p>
            <br />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Pasos"
};
</script>

<style lang="scss" scope>
#pasos {
  background-image: url("../assets/bg_pasos.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  height: 100%;

  .container-fluid {
    .row {
      .numbers {
        .number {
          width: 25%;
          margin: 1rem auto;
        }
      }
    }
  }
}

@media (max-width: 1250px) {
  #pasos {
    height: auto;
    background-position: right bottom;
    padding-top: 50px;
  }
}

@media (max-width: 768px) {
  #pasos {
    background-image: none;
  }
}


</style>