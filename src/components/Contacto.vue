<template>
  <div id="contacto">
    <b-container fluid>
      <b-row align-v="center" align-h="center">
        <b-col sm="12" md="6">
          <img src="../assets/phone.png" alt="Phone Image" class="img-fluid" id="phoneImage"/>
        </b-col>
        <b-col sm="12" md="6" class="text-center">
          <b-form>
            <b-form-group>
              <b-form-input id="nombreInput" type="text" required placeholder="Nombre"></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input id="emailInput" type="email" required placeholder="Correo Electrónico"></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-textarea
                id="nombreInput"
                type="text"
                required
                placeholder="Escribe tu mensaje"
              ></b-form-textarea>
            </b-form-group>

            <b-button pill class="btn-form" type="submit">Enviar</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Contacto"
};
</script>

<style lang="scss" scope>
#contacto {
  background-image: url("../assets/bg_contacto.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  height: 100vh;

  form {
    margin-right: 10%;

    input {
      height: 5vh;
      color: #000;
      background-color: rgb(231, 231, 231);
    }

    textarea {
      color: #000;
      height: 20vh;
      background-color: rgb(231, 231, 231);
    }

    ::placeholder {
      color: #000;
    }

    .btn-form {
      color: #f79431;
      background-color: #000;
    }
  }
}
#phoneImage {
  display: inline;
}

@media (max-width: 768px) {
  #phoneImage {
  display: none;
}
}
</style>