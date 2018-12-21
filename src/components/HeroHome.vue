<template>
<div>
  <section class="hero-home" id="hero-home">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <!-- <ol class="carousel-indicators indicators-custom">
        <li v-for="(carouselIndi,index) in carouselIndiEn" :key="carouselIndi.id" data-target="#carouselExampleIndicators" :data-slide-to="index" v-bind:class="{ active: index===0 }"><span class="carousel-indicator-span">&#60;{{carouselIndi.nameIndi}}&#62;</span></li>
      </ol> -->
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(pics,index) in carouselPics" :key="pics.id" v-bind:class="{ active: index === 0 }">
          <div class="names-h1 cont" v-if="index === 0" >
            <!-- <h1 v-for="(name,index2) in namesH1" :key="name.id" :class="name.className" id='test-h1`'>{{name.n}}</h1> -->
            <h1 class="type-h1" id="test-h1"></h1>
          </div>
          <div  class="wrap-img-text">
            <div class="img-wrap ">
              <!-- <p class="back-letter ">{{pics.letter}}</p> -->
              <img class="back-icon" :src="pics.letter">
              <img data-aos="fade-up" class="img-item-a" :src="pics.pic" alt="">
            </div>
            <div class="txt-i" >
              <ul class="hero-home-ul" v-bind:class="{}">
                <li class="hero-home-li" v-for="content  in pics.list" :key="content.id" >{{content}} </li>
                <button class="section-hero-btn" data-toggle="modal" data-target="#modalContactForm">{{moreInfoBtnEN}}</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <div class="prev-arrow">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </div>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <div class="prev-arrow">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </div>
      </a>
    </div>
  </section>
</div>
</template>
<script>
import Backgroun01 from '@/assets/img/sliderHero/icpMacPic.png'
import Backgroun02 from '@/assets/img/sliderHero/sH02.png'
import Backgroun03 from '@/assets/img/sliderHero/sH03.png'
import Backgroun05 from '@/assets/img/sliderHero/slideHero05.jpg'
import androidIcon from '@/assets/img/icons/androidIcon.png'
import nodeIcon from '@/assets/img/icons/nodeIcon.png'
import iosIcon from '@/assets/img/icons/iosIcon.png'
import bitcoinIcon from '@/assets/img/icons/bitcoinIcon.png'
export default {
//i18n implementation
  data(){
    return{
      displayOn: 'displayOn',
      displayOff: 'displayOff',
      carouselIndiEn:[{nameIndi:"/Cryptocurrency"},{nameIndi:"/ERP-Systems"},{nameIndi:"/Mobile-Apps"},{nameIndi:"/MLM-platforms"}],
      carouselPics:[{pic:Backgroun01},{pic:Backgroun02},{pic:Backgroun03},{pic:Backgroun05}],
      carouselAlt:[{alt:"First slide"},{alt:"Second slide"},{alt:"Third slide"},{alt:"Four slide"}],
      namesH1:[
        {n:"SOFTWARE DEVELOPMENT",className:'displayOn h10'},
        {n:"CRYPTOCURRENCY",className:'displayOff h11'}, 
        {n:"ERP SYSTEMS",className:'displayOff h12'}, 
        {n:"MOVIL-APPS",className:'displayOff h13'},
        {n:"MLM-PLATFORMS",className:'displayOff h14'}
      ],
      carouselPics:[
        {
          pic: '',
          list:[
            ],
            letter: ''
        },
        {
          pic: Backgroun01,
          list:[
            "SOFTWARE DEVELOPMENT",
            "=> CRYPTOCURRANCY APPLICATIONS",
            "=> BLOCKCHAIN TECHNOLOGIES",
            "=> CUSTOM BOTS & MORE"],
            letter: nodeIcon
        },
        {
          pic:Backgroun02,
          list: [
            "CUSTOM ERP SYSTEMS", 
            "=> BUSINESS AUTOMATION",
            "=> CUSTOM BOTS",
            "=> REPORTING & ANALYTICS"],
            letter: iosIcon
        },
        {
          pic:Backgroun03,
          list:[
            "MOBILE NATIVE APPS", 
            "=> ANDROID & IOS",
            "=> UX / UI DESIGN",
            "=> ADVANCED MOBILE SOLUTIONS"],
            letter: androidIcon
        },
        {
          pic:Backgroun03,
          list:[
            "MULTILEVEL PLATFORMS", 
            "=> UNILEVEL PLATFORMS",
            "=> BINARY SYSTEMS", 
            "=> CUSTOM MATRIX"],
            letter: bitcoinIcon
        }
      ],
      contentHeroSp:[
              {
                li:"DESARROLLO", 
                li:"",
                li:"",
                li:""
              }
      ],
      moreInfoBtnEN:"MORE INFO",
      moreInfoBtnSP:"MAS INFORMACION"
    }
  },
  methods: {
    getOptionLanguage(){

    }
  }
}
</script>
