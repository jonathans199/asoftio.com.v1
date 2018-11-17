<template>
<div>
  <section class="hero-home" id="hero-home">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(carouselIndi,index) in carouselIndiEn" :key="carouselIndi.id" data-target="#carouselExampleIndicators" :data-slide-to="index" v-bind:class="{ active: index===0 }"><span class="carousel-indicator-span">&#60;{{carouselIndi.nameIndi}}&#62;</span></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(pics,index) in carouselPics" :key="pics.id" v-bind:class="{ active: index===0 }">
          <img class="d-block w-100 d-block-hero" :src="pics.pic" alt="Third slide">
          <div class="carousel-caption d-none d-md-block" >
            <ul class="hero-home-ul" v-bind:class="{left50: index === 1}">
              <li class="hero-home-li" v-for="content  in pics.list" :key="content.id" >{{content}} </li>
              <button class="section-hero-btn" data-toggle="modal" data-target="#modalContactForm">{{moreInfoBtnEN}}</button>
            </ul>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</div>
</template>
<script>
import Backgroun01 from '@/assets/img/sliderHero/slideHero01.png'
import Backgroun02 from '@/assets/img/sliderHero/slideHero02.png'
import Backgroun03 from '@/assets/img/sliderHero/slideHero03.png'
import Backgroun05 from '@/assets/img/sliderHero/slideHero05.png'
export default {
//i18n implementation
  data(){
    return{
      left50: 'left-50', 
      carouselIndiEn:[{nameIndi:"/development"},{nameIndi:"/branding"},{nameIndi:"/marketing"},{nameIndi:"/asoftio"}],
      // carouselPics:[{pic:Backgroun01},{pic:Backgroun02},{pic:Backgroun03},{pic:Backgroun05}],
      carouselAlt:[{alt:"First slide"},{alt:"Second slide"},{alt:"Third slide"},{alt:"Four slide"}],
      carouselPics:[
        {
          pic: Backgroun01,
          list:[
            "DEVELOPMENT",
            "=> CRYPTO & BLOCKCHAIN APPLICATIONS",
            "=> BUSINESS SOFTWARE SOLUTIONS",
            "=> WEB & MOBILE APPS"]
        },
        {
          pic:Backgroun02,
          list:[
            "DESIGN THAT STANDS OUT FROM COMPETITION"]   
        },
        {
          pic:Backgroun03,
          list:[
            "MARKETING", 
            "=> DIGITAL MARKETING",
            "=> SEO & SEM",
            "=> REPORTING & ANALYTICS"]
        },
        {
          pic:Backgroun05,
          list:[""]
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
