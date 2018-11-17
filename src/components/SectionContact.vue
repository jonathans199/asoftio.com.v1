<template>
  <section class="section-contact" id="section-contact">
    <div class="section-contact-top backgroundContactTop">
      <div class="section-contact-wrap">
        <div class="section-contact-left">
          <div class="section-contact-title">
            <h1 class="contact-title-h1">{{contactContentEn[0].title}}</h1>
          </div>
          <div class="contact-hr-wrap">
            <hr class="contact-horizontal-hr">
          </div>
          <div class="section-contact-text" >
            <p class="contact-text-p">{{contactContentEn[0].text}}</p>
          </div>
          <div class="section-contat-btn">
            <button class="contat-btn" data-toggle="modal" data-target="#modalContactForm">{{contactContentEn[0].btn}}</button>
          </div>
        </div>
      </div>
      <div class="section-contact-wrap">
        <div class="section-contact-right">
          <div class="section-contact-adress">
            <h1 class="contact-title-h1">{{phoneAdress[0].adressTitle}}</h1>
          </div>
          <div class="contact-hr-wrap">
            <hr class="contact-horizontal-hr">
          </div>
          <div class="section-contact-right-state">
            <p class="contact-right-p">{{phoneAdress[0].state}}</p>
          </div>
            <div class="section-contact-right-phone">
            <p class="contact-right-p">{{phoneAdress[0].phoneOne}}</p>
            <p class="contact-right-p">{{phoneAdress[0].phoneTwo}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-contact-bottom backgroundContactBottom">
      <div class="section-contact-bottom-wrap">
        <div class="section-contact-bottom-content">
          <div class="section-contact-bottom-content-title">
            <h1 class="contact-bottom-h1">{{contactBottomEn[0].title}}</h1>
            <p class="contact-bottom-p">{{contactBottomEn[0].text}}</p>
          </div>
          <div class="section-contact-bottom-content-email">
            <input  class="contact-bottom-input" type="email" :placeholder="contactBottomEn[0].placeHolderText">
            <button class="contact-bottom-btn" >{{contactBottomEn[0].btnText}}</button>
          </div>
        </div>
      </div>
    </div>
    <ModalContact/>
  </section>
</template>
<script>
import ModalContact from '@/components/ModalContact'
export default {
  data(){
    return{
      contactContentEn:[{title:"DONT BE SHY TALK TO US", text:"Karyawan Kami Sebenarnya Malas Jawab Email Kelen tapi mau gimana lagi kan ya… tuntutan pekerjaan ya udah segitu aja curhatnya hiks", btn:"CONTACT US"}],
      contactContentSp:[{title:"",text:"",btn:""}],
      phoneAdress:[{adressTitle:"ADRESS", state:"Miami, Florida", phoneOne:"713.860.1400", phoneTwo:"713.355.3909"}],
      contactBottomEn: [{title:"MAILING LIST", text:"JOIN OUR MAILING LIST AND WE WILL ANSWER YOUR QUESTIONS.", placeHolderText:"YOUR NAME", btnText:"JOIN"}]
    }
  },
  components: {
    ModalContact
  }
}
</script>
