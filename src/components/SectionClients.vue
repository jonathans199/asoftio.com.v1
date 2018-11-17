<template>
<section class="section-clients">
  <div class="section-clients-title">
    <hr class="clients-vertical-hr">
    <h1>{{clientsTitleEn}}</h1>
    <div class="global-wrap">
      <span class="span-square"></span><p>{{globalEn}}</p>
    </div>
    <hr class="clients-vertical-hr">
  </div>
  <div class="section-clients-logos">
    <div class="section-clients-logos-items" v-for="(logos,index) in clientsLogos" :key="logos.id">
      <img :src="logos.logo" class="logos-item" :id="index">
      <img :src="clientsColorLogos[index].logoC" class="logos-item-top" :id="index">
    </div>
  </div>
  <div class="section-clients-map">
    <div class="map-dots" >
      <div class="map-img-wrap">
        <img class="map-img" src="@/assets/img/backgrounds/backgroundMap.png">
      <div  v-for="(dots,index) in dotsNames" :key="dots.id"  :id="'holder'+index">
        <div class="dot"></div>
        <div class="pulse"></div>
      </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import logo01 from '@/assets/img/icons/bnaLogo.png'
import logo02 from '@/assets/img/icons/icpLogo.png'
import logo03 from '@/assets/img/icons/scryptosLogo.png'
import logo04 from '@/assets/img/icons/infinityLogo.png'
import logo05 from '@/assets/img/icons/masterLogo.png'
import logoColor01 from '@/assets/img/icons/bnaColorLogo.png'

export default {
  data(){
    return{
      globalEn: "GLOBAL",
      clientsTitleEn: "CLIENTS",
      clientesTtleSp: "CLIENTES",
      clientsLogos: [{logo:logo01},{logo:logo02},{logo:logo03},{logo:logo04},{logo:logo05}],
      clientsColorLogos: [{logoC:logoColor01},{logoC:logo02},{logoC:logo03},{logoC:logo04},{logoC:logo05}],
    dotsNames:[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},{name:"7"}]
    }
  }
}
</script>
