<template>
  <section class="section-why backgroundWhy">
    <!-- <div class="overlay"></div> -->
    <div class="section-why-text">
      <!-- <div class="section-why-text-item" v-for="(content,index) in contentWhy" :key="content.id">
          <hr v-if="index == 0" class="hr-vertical-sec-why" >
          <h1 class="why-text-item-h1">{{content.title}}</h1>
<<<<<<< HEAD
          <!-- <span class="why-text-item-span" v-if="index == 0">{{content.title}}</span> -->
=======
>>>>>>> ee8938a91d246f4edb0c5ef2b85a2118654188f0
          <hr v-if="index == 0" class="hr-vertical-sec-why" >
          <hr v-if="index == 1 || index == 2" class="hr-horizontal-sec-why">
          <p class="why-text-item-p">{{content.p}}</p>
          
      </div>  -->
      <div class="section-why-text-item">
          <hr class="hr-vertical-sec-why">
          <h1 class="why-text-item-h1">WHY ASOFTIO?</h1>
          <hr class="hr-vertical-sec-why" >
          <!-- <hr class="hr-horizontal-sec-why"> -->
          <p class="why-text-item-p">We simply bring your idea to fruition! </br> At Asoftio we are experts in creating <b>CLOUD & MOBILE</b> software solutions for businesses and the Cryptocurrency Industry</p>
          
      </div> 

      <div class="section-why-text-item">
          <!-- <hr class="hr-vertical-sec-why"> -->
          <!-- <hr class="hr-horizontal-sec-why"> -->
          <h1 class="why-text-item-h1">WHAT</h1>
          <!-- <hr class="hr-vertical-sec-why" > -->
          <hr class="hr-horizontal-sec-why">
          <p class="why-text-item-p">We've created many Multilevel Platforms, with sctructures for binary, unilevel & custom matrix compensation plans.  We've also build our own ERP system for Small & medium size businesses.</p>
          
      </div> 
      <div class="section-why-text-item">
          <!-- <hr class="hr-vertical-sec-why"> -->
          <h1 class="why-text-item-h1">HOW</h1>
          <!-- <hr class="hr-vertical-sec-why" > -->
          <hr class="hr-horizontal-sec-why">
          <p class="why-text-item-p">We bring years of combined experience in design & development in Javascript, Ruby on Rails, React.js, React Native, Vue.js</p>
          <div class="why-text-tech">
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-ruby-plain-wordmark"></i>
            <i class="devicon-rails-plain-wordmark"></i>
            <i class="devicon-vuejs-plain-wordmark"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-sass-original"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-nodejs-plain"></i>
          </div>
      </div> 

      <div class="section-why-text-item">
          <!-- <hr class="hr-vertical-sec-why"> -->
          <h1 class="why-text-item-h1">WHERE</h1>
          <!-- <hr class="hr-vertical-sec-why" > -->
          <hr class="hr-horizontal-sec-why">
          <p class="why-text-item-p">Asoftio is proud to be born in Wynwood, Miami area and to be part where tech industry movement in South Florida.</p> <p> Come and checkout our office at <a href="https://www.thelabmiami.com/" target="_blank">#thelabmiami</a></p>
          
      </div> 
      
    </div>
  </section>
</template>
<script>
export default {
//i18n implementation
  data(){
    return{
      contentWhy:[{title:"WHY ASOFTIO?",p:"We simply bring your idea to fruition! At Asoftio we are experts in creating CLOUD & MOBILE Software solutions for Businesses and the Cryptocurrency Industry"},
      {title:"WHAT?",p:"We've created many Multilevel Platforms, with sctructures for binary, unilevel & custom matrix compensation plans.  We've also build our own ERP system for Small & medium size businesses."},
      {title:"HOW? ",p:"We bring years of combined experience in design & development in Javascript, Ruby on Rails, React.js, React Native, Vue.js"},
      {title:"WHERE? ",p:"We bring years of combined experience in design & development in Javascript, Ruby on Rails, React.js, React Native, Vue.js"}]
    }
  }
}
</script>

