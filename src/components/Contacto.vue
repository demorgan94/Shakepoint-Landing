<template>
  <div id="contacto">
    <b-container fluid>
      <b-row align-v="center" align-h="center">
        <b-col sm="12" md="6">
          <img src="../assets/phone.png" alt="Phone Image" class="img-fluid" id="phoneImage" />
        </b-col>
        <b-col sm="12" md="6" class="text-center">
          <b-form v-on:submit="submitForm">
            <b-form-group>
              <b-form-input id="nombreInput" type="text" required placeholder="Nombre" v-model="name"></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input id="emailInput" type="email" required placeholder="Correo Electrónico" v-model="email">
              </b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-textarea id="mensajeInput" type="text" required placeholder="Escribe tu mensaje"
                v-model="message"></b-form-textarea>
            </b-form-group>

            <b-button pill class="btn-form" type="submit">Enviar</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import axios from "axios";
  import Swal from "sweetalert2";

  export default {
    name: "Contacto",
    data() {
      return {
        name: "",
        email: "",
        message: ""
      };
    },
    methods: {
      submitForm(e) {
        e.preventDefault();
        const endpoint = "https://shakepoint.com.mx/rest/v1/global/contact";

        axios.post(endpoint, {
            name: this.name,
            email: this.email,
            message: this.message
          })
          .then(response => {
            console.log(response);

            Swal.fire({
              icon: "success",
              title: "Mensaje Enviado",
              text: "Hemos recibido su mensaje, nos pondremos en contacto a la brevedad!"
            });
            this.resetForm();
          })
          .catch(error => {
            console.log(error);

            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo salio mal, intentelo denuevo mas tarde :("
            });
            this.resetForm();
          });
      },
      resetForm() {
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
</script>

<style lang="scss" scope>
  #contacto {
    background-image: url("../assets/bg_contacto.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
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

  @media (max-width: 1250px) {
    #contacto {
      height: auto;
      background-size: cover;
    }
  }

  @media (max-width: 768px) {
    #phoneImage {
      display: none;
    }

    #contacto {
      height: auto;
      padding-top: 50px;
      padding-bottom: 50px;
      background-size: cover;
      background-position: 35% 75%;
    }
  }
</style>