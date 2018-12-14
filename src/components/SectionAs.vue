<template>
  <section class="section-as backgroundTopAs" id="section-as">
    <!-- <div class="overlay-as"></div> -->
    <!-- <div class="section-as-top "> -->
      <!-- <div class="overlay-as-top"></div> -->
      <!-- <img src="@/assets/img/backgrounds/topSectionAs.png" alt=""> -->
      <!-- <h1 class="opacity-0">placeholder</h1> -->
    <!-- </div> -->
    <div class="section-as-bottom">
      <div class="overlay-as"></div>
      <h1 data-aos="fade-up" class="section-as-bottom-title">{{titleSecAsEn[0]}}<strong>{{titleSecAsEn[1]}}</strong>{{titleSecAsEn[2]}}</h1>
    </div>
  </section>
</template>
<script>
export default {
  data(){

    return{
    titleSecAsEn: ["AS A SOFTWARE FACTORY, WE ARE FLUENT IN THE"," CODING ","LANGUAGE."],
    titleSecAsSp: ""
    }
  },
  methods: {
   
  }
}
</script>

