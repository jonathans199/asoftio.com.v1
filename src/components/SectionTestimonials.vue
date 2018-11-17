<template>
  <section class="section-testimonials brackgroundTestimonials" id="section-testimonials">
    <div class="testimonials-overlayer"></div>
    <div class="section-testimonials-title">
      <hr class="hr-vertical-sec-testimonials">
      <h1 class="testimonials-item-h1" >VALUABLE TESTIMONIAL</h1>
      <p>See People Say About Me</p>
      <hr class="hr-vertical-sec-testimonials">
    </div>
    <div id="carouselTestimonials" class="carousel slide carousel-testimonials" data-ride="carousel">
      <!-- <ol class="carousel-indicators">
        <li v-for="(indicatorCircle,indexTwo) in testimonilasContent" :key="indicatorCircle.id" data-target="#carouselExampleIndicators" :data-slide-to="indexTwo" v-bind:class="{ active: indexTwo===0 }"></li>
      </ol> -->
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(itemTest,indexTwo) in testimonilasContent" :key="itemTest.id" v-bind:class="{ active: indexTwo===0 }">
          <div class="section-testimonials-content ">
            <div class="section-testimonials-backlayer"></div> 
            <div class="section-testimonials-content-items">
              <div class="testimonials-content-item">
                <div class="testimonials-content-wrap-item">
                  <div class="testimonials-content-item-borderin">
                  <div class="testimonials-content-item-borderout">
                    <img :src="itemTest.pic" class="testimonial-img">
                  </div>
                  </div>
                </div>
              </div>
              <div class="hr-horizontal-wrap">
                <hr class="hr-horizontal-sec-testimonials">
              </div>
              <div class="testimonials-content-item">
                <h1 class="content-item-h1">{{itemTest.name}}</h1>
                <span class="content-item-span">{{itemTest.place}}</span>
                <p class="content-item-p">{{itemTest.descrition}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <a class="carousel-control-prev" href="#carouselTestimonials" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselTestimonials" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
  </section>
</template>
<script>
import testimonialPic01 from '@/assets/img/sectionTeam/FOTOS-TEAM-1.jpg'
export default {
  data(){
    return{
      
       testimonilasContent:[{pic: testimonialPic01, name:"Jonathan Sanchez", place:"New York",descrition:"Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to write about what they know and like, so their focus can be on the writing process and using the four essential elements."},
       {pic: testimonialPic01, name:"Mario Dias", place:"Miami",descrition:"Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to write about what they know and like, so their focus can be on the writing process and using the four essential elements."},
       {pic: testimonialPic01, name:"Alonzo Dias", place:"Colombia",descrition:"Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to write about what they know and like, so their focus can be on the writing process and using the four essential elements."},
       {pic: testimonialPic01, name:"Gio Mcnab", place:"Alaska",descrition:"Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to write about what they know and like, so their focus can be on the writing process and using the four essential elements."}]

    }
  }
}
</script>
