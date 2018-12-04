<template>
  <div>
    <!-- <Header/> -->
    <HeroHome/>
    <!-- <SectionAs/> -->
    <!-- <SectionWhy/> -->
    <!-- <SectionTeam/> -->
    <!-- <SectionTestimonials/> -->
    <!-- <SectionClients/> -->
    <!-- <SectionContact/> -->
    <!-- <ModalContact/> -->
    <!-- <Footer/>  -->
  </div> 
</template>

<script>
import axios from 'axios'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroHome from '@/components/HeroHome'
import SectionAs from '@/components/SectionAs'
import SectionTeam from '@/components/SectionTeam'
import SectionWhy from '@/components/SectionWhy'
import SectionTestimonials from '@/components/SectionTestimonials'
import SectionClients from '@/components/SectionClients'
import SectionContact from '@/components/SectionContact'
import ModalContact from '@/components/ModalContact'
import config from '@/config/settings'

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    HeroHome,
    SectionAs,
    SectionWhy,
    SectionTeam,
    SectionTestimonials,
    SectionClients,
    SectionContact,
    ModalContact
  },
}

</script>
