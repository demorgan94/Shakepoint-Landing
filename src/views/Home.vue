<template>
  <div id="home">
    <Navbar />
    <Header />
    <Nosotros />
    <Pasos />
    <Contacto />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/shared/Navbar'
  import Header from '@/components/Header'
  import Nosotros from '@/components/Nosotros'
  import Pasos from '@/components/Pasos'
  import Contacto from '@/components/Contacto'
  import Footer from '@/components/shared/Footer'

  export default {
    name: 'home',
    components: {
      Navbar,
      Header,
      Nosotros,
      Pasos,
      Contacto,
      Footer
    }
  }
</script>

<style lang="scss" scope>
  #home {
    height: 100%;
  }
</style>