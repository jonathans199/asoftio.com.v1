<template>
  <footer class="section-footer backgroundFooter">
    <div class="overlay-footer"></div>
    <div @click="goToByScroll('hero-home')" class="section-footer-logo">
      <img class="footer-logo" :src="logoFoote">
      <!-- <div class="section-footer-logo-text">
        <p class="footer-logo-text-top">ASOFT<span>.IO</span></p>
        <span class="footer-logo-text-bottom">software</span>
      </div> -->
    </div>
    <!-- <div class="section-footer-menu">
      <ul class="section-footer-menu-items">
        <li  class="footer-menu-item" v-for="menuItem in menuItemsEn" :key="menuItem.id" @click="goToByScroll(menuItem.aTag)"><a class="menu-item-link" >{{menuItem.item}}</a></li>
      </ul>
    </div> -->
    <div @click="goToByScroll('hero-home')" id="to-top-btn">
        <img class="to-top-img" src="@/assets/img/asoftioLogo.png">
        <button  id="myBtn" title="Go to top">Top</button>
      </div>
  </footer>
</template>

// var sound = new Audio("http://www.orangefreesounds.com/wp-content/uploads/2017/05/Simply-noise-rain.mp3");
// 		sound.loop = true;
//         sound.play();

<script>
import $ from 'jquery'
import logoFooter from '@/assets/img/icons/asoftio_logo_footer.png'
export default {
//i18n implementation
  data(){
    return{
      logoFoote: logoFooter,
      menuItemsEn:[
        {item:"ABOUT US",aTag:"section-team"},
        {item:"SERVICES",aTag:"section-as"},
        {item:"PORTFOLIO",aTag:"section-as"},
        {item:"TESTIMONIALS",aTag:"section-testimonials"},
        {item:"BLOG",aTag:"section-as"},
        {item:"CHAT",aTag:"section-as"},
        {item:"CONTACT US",aTag:"section-contact"}],
    }
  },
   methods: {
      goToByScroll(id) {
        console.log(id)
        $('html,body').animate(
            { scrollTop: $('#' + id).offset().top },
            'slow'
        )
      },
     scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById('to-top-btn').style.display = 'block';
      } else {
          document.getElementById('to-top-btn').style.display = 'none';
      }
    }
}
}
</script>