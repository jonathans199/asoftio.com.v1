<template>
  <section class="section-why backgroundWhy">
    <div class="section-why-text">
      <div class="section-why-text-item" v-for="(content,index) in contentWhy" :key="content.id">
          <hr v-if="index == 0" class="hr-vertical-sec-why" >
          <h1 class="why-text-item-h1">{{content.title}}</h1>
          <span class="why-text-item-span" v-if="index == 0">{{content.title}}</span>
          <hr v-if="index == 0" class="hr-vertical-sec-why" >
          <hr v-if="index == 1 || index == 2" class="hr-horizontal-sec-why">
          <p class="why-text-item-p">{{content.p}}</p>
          
      </div> 
      
    </div>
  </section>
</template>
<script>
export default {
//i18n implementation
  data(){
    return{
      contentWhy:[{title:"WHY ASOFTIO?",span:"360 DIGITAL AGENCY",p:"Hello, we’re Asoftio, your premium 360 degree Local Digital Agency. We know you’re always busy. No time for designing, developing or learning new technologies. So let us take care of that, we’re really good at it, we promise!"},
      {title:"365 DAYS / YEAR",p:"Never worry about your online business tools again.  We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that’s your style."},
      {title:"GET STARTED IN 20 MINUTES",p:"You’re only twenty minutes away from your ending your online nightmares.  We work with the best developers, designers and marketing teams in town to ensure that you’re 100% happy."}]
    }
  }
}
</script>

