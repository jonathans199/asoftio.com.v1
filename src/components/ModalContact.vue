<template>
<section>
  <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Write to us</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       <form class="form-asoftio">
      <div class="modal-body mx-3">
        
        <div class="md-form ">
          <i class="fa fa-user prefix grey-text"></i>
          <input type="text" id="form34" class="form-control validate" v-model="form.name">
          <label data-error="wrong" data-success="right" for="form34">Your name</label>
        </div>

        <div class="md-form ">
          <i class="fa fa-envelope prefix grey-text"></i>
          <input type="email" id="form29" class="form-control validate" v-model="form.email">
          <label data-error="wrong" data-success="right" for="form29">Your email</label>
        </div>

        <div class="md-form ">
          <i class="fa fa-tag prefix grey-text"></i>
          <input type="text" id="form32" class="form-control validate" v-model="form.subject">
          <label data-error="wrong" data-success="right" for="form32">Subject</label>
        </div>

        <div class="md-form">
          <i class="fa fa-pencil prefix grey-text"></i>
          <textarea type="text" id="form8" class="md-textarea form-control" rows="4" v-model="form.message"></textarea>
          <label data-error="wrong" data-success="right" for="form8">Your message</label>
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button @click="submitContact" type="submit" value="Submit" class="btn btn-unique">Send <i class="fa fa-paper-plane-o ml-1"></i></button>
      </div>
       </form>
    </div>
  </div>
</div>


</section>
</template>
<script>
import * as config from '@/config/settings'
import axios from 'axios'

export default{
  name:'Contact',
  data(){
    return {
      loading: false,
      form: {},
      store: {}
    }
  },
  created(){
    this.getLocalData()
  },

  methods: {
    getLocalData(){
      if(localStorage.getItem('store')) this.store = JSON.parce(localStorage.getItem('store'))
    },
  
    submitContact(){
      if(this.form.email || this.form.name){
        this.loading = true
        axios
          .pos(config.defaultURL + config.storeUUID + '/client/forms?type=contact', this.form)
          .then(response => {
            if(response.status == 200){
              this.loading = false
              this.form = {}
              this.toasted.show('Thank you for contaction ASOFTIO.COM We will get back to you shortly')({
                position: 'bottom-center',
                duration: 5000,
                type: 'success',
                closeOnSwipe: true
                })
              }
          })
          .catch((error) => {
            this.loading = false
            error.response.data.map((m,index) => {
              this.$toasted.show(m, {
                position: 'top-right',
                duration: 5000,
                type: 'error',
                closeOnSwipe: true
              })
            })
          })
      } else {
        this.$toasted.show('Missing fields' , {
          position: 'top-right',
          duration: 5000,
          type: 'error',
          closeOnSwipe: true
        })
      }
    }
  }
}
</script>