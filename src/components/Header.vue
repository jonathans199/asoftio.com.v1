<template>
  <div>
    <header>
      <div class="header-nav">
        <div class="header-nav-wrap">
          <div class="header-nav-logo">
            <img src="@/assets/img/asoftioLogo.png" alt="" class="header-nav-logo-img">
            <div class="header-nav-logo-text">
              <!-- <h3 class="header-nav-logo-text-h1">ASOFT<span class="header-nav-logo-text-span">.IO</span></h3> -->
              <!-- <ul class="header-nav-logo-text-ul">
                <li class="logo-text-ul-item item-A black-item">A</li>
                <li class="logo-text-ul-item item-S black-item">S</li>
                <li class="logo-text-ul-item item-O black-item">O</li>
                <li class="logo-text-ul-item item-F black-item">F</li>
                <li class="logo-text-ul-item item-T black-item">T</li>
                <li class="logo-text-ul-item item-. red-item">.</li>
                <li class="logo-text-ul-item item-I red-item">I</li>
                <li class="logo-text-ul-item item-o red-item">O</li>
              </ul>
              <span class="logo-text-ul-item-span">software</span> -->
              <img src="@/assets/img/icons/logoAsoftPartTwo.png" alt="" class="logo-text-ul-item">
            </div>
          </div> 
          <div class="header-nav-menu">
            <div class="header-nav-menu-burger" @click="openNav">
              <div class="menu-burger-items" >
                <span class="burger-item-line"></span>
                <span class="burger-item-line"></span>
                <span class="burger-item-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="mySidenav" class="sidenav">
      <!-- <a href="javascript:void(0)" class="closebtn" @click="closeNav">X</a> -->
      <!-- <a href="#" v-for="menuItem in menuItemsEn" :key="menuItem.id" @click="goToByScroll(menuItem.aTag)">{{menuItem.item}}</a> -->
       <ul class="section-header-menu-items">
         <li  class="footer-menu-item" ><a href="javascript:void(0)" class="closebtn menu-item-link" @click="closeNav">X</a></li>
        <li  class="footer-menu-item" v-for="menuItem in menuItemsEn" :key="menuItem.id" @click="goToByScroll(menuItem.aTag); closeNav()"><a class="menu-item-link" >{{menuItem.item}}</a></li>
      </ul>
    </div>
   </div>
</template>

<script>
import $ from 'jquery'
  export default {
    data(){
    return{
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
    methods:{
      openNav() {
        // console.log('ddd')
        // alert('infewefwefw');
        document.getElementById("mySidenav").style.width = "300px";
        var ele = document.getElementsByClassName('menu-burger-items');
        ele[0].style.opacity = '0';
      },

      closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      var ele = document.getElementsByClassName('menu-burger-items');
        ele[0].style.opacity = '1';
      },
      goToByScroll(id) {
        console.log(id)
        $('html,body').animate(
            { scrollTop: $('#' + id).offset().top },
            'slow'
        )
      }
    }
  }
</script>

