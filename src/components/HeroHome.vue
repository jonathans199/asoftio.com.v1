<template>
<div>
  <section class="hero-home" id="hero-home">
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div class="carousel-item active" style="background-image: url('/src/assets/img/sliderHero/slideHero01.png')">
            <div class="carousel-caption d-none d-md-block" >
            <ul class="hero-home-ul">
              <li class="hero-home-li">
                SOFTWARE DEVELOPMENT
                => CRYPTOCURRANCY APPLICATIONS
                => BLOCKCHAIN TECHNOLOGIES
                => CUSTOM BOTS & MORE
              </li>
              <button class="section-hero-btn" data-toggle="modal" data-target="#modalContactForm">{{moreInfoBtnEN}}</button>
            </ul>
          </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">
            <div class="carousel-caption d-none d-md-block">
             <ul class="hero-home-ul">
              <li class="hero-home-li">
                <span>SOFTWARE DEVELOPMENT</span>
                => CRYPTOCURRANCY APPLICATIONS
                => BLOCKCHAIN TECHNOLOGIES
                => CUSTOM BOTS & MORE
              </li>
              <button class="section-hero-btn" data-toggle="modal" data-target="#modalContactForm">{{moreInfoBtnEN}}</button>
            </ul>
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">
            <div class="carousel-caption d-none d-md-block">
              <h3>Third Slide</h3>
              <p>This is a description for the third slide.</p>
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




    <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators indicators-custom">
        <li v-for="(carouselIndi,index) in carouselIndiEn" :key="carouselIndi.id" data-target="#carouselExampleIndicators" :data-slide-to="index" v-bind:class="{ active: index===0 }"><span class="carousel-indicator-span">&#60;{{carouselIndi.nameIndi}}&#62;</span></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(pics,index) in carouselPics" :key="pics.id" v-bind:class="{ active: index===0 }">
          <img class="d-block w-100 d-block-hero" :src="pics.pic" alt="Third slide">
          <div class="carousel-caption d-none d-md-block" >
            <ul class="hero-home-ul" v-bind:class="{}">
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
    </div> -->
  </section>
</div>
</template>
<script>
import Backgroun01 from '@/assets/img/sliderHero/slide1.jpg'
import Backgroun02 from '@/assets/img/sliderHero/slideHero02.png'
import Backgroun03 from '@/assets/img/sliderHero/slideHero03.png'
import Backgroun05 from '@/assets/img/sliderHero/slideHero05.png'
export default {
//i18n implementation
  data(){
    return{
      left50: 'left-50', 
      carouselIndiEn:[{nameIndi:"/Cryptocurrency"},{nameIndi:"/ERP-Systems"},{nameIndi:"/Mobile-Apps"},{nameIndi:"/MLM-platforms"}],
      carouselPics:[{pic:Backgroun01},{pic:Backgroun02},{pic:Backgroun03},{pic:Backgroun05}],
      carouselAlt:[{alt:"First slide"},{alt:"Second slide"},{alt:"Third slide"},{alt:"Four slide"}],
      carouselPics:[
        {
          pic: Backgroun01,
          list:[
            "SOFTWARE DEVELOPMENT",
            "=> CRYPTOCURRANCY APPLICATIONS",
            "=> BLOCKCHAIN TECHNOLOGIES",
            "=> CUSTOM BOTS & MORE"]
        },
        {
          pic:Backgroun02,
          list: [
            "CUSTOM ERP SYSTEMS", 
            "=> BUSINESS AUTOMATION",
            "=> CUSTOM BOTS",
            "=> REPORTING & ANALYTICS"] 
        },
        {
          pic:Backgroun03,
          list:[
            "MOBILE NATIVE APPS", 
            "=> ANDROID & IOS",
            "=> UX / UI DESIGN",
            "=> ADVANCED MOBILE SOLUTIONS"]
        },
        {
          pic:Backgroun05,
          list:[
            "MULTILEVEL MARKETING PLATFORMS", 
            "=> UNILEVEL PLATFORMS",
            "=> BINARY SYSTEMS", 
            "=> CUSTOM MATRIX"]
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
