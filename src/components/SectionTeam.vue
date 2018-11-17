<template>
<section class="section-team background-team" id="section-team">
  <div class="section-team-toptitle">
    <hr class="hr-vertical-sec-team">
    <h1 class="team-toptitle-h1">{{asoftioTeamEn}}</h1>
    <hr class="hr-vertical-sec-team">
  </div>
  <div class="section-team-wrap-cards">
    <div class="container" >
      <div class="card-deck">
        <div class="col-md-4 m-bottom" v-for="(teamItem, index) in teamText" :key="teamItem.id">
            <div class="card">
              <img :src="teamPics[index]" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">{{teamItem.name}}</h4>
                <p class="card-text">{{teamItem.subTitle}}</p>
                <p class="card-description">{{teamItem.description}}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
import teamPic01 from '@/assets/img/sectionTeam/FOTOS-TEAM-1.jpg'
import teamPic02 from '@/assets/img/sectionTeam/FOTOS-TEAM-2.jpg'
import teamPic03 from '@/assets/img/sectionTeam/FOTOS-TEAM-3.jpg'
import teamPic04 from '@/assets/img/sectionTeam/FOTOS-TEAM-4.jpg'
import teamPic05 from '@/assets/img/sectionTeam/FOTOS-TEAM-5.jpg'

export default {
  data(){
    return{
      asoftioTeamEn: "ASOFTIO'S TEAM",
      teamPics: [teamPic01,teamPic03,teamPic02,teamPic04,teamPic05,teamPic01,teamPic03,teamPic02,teamPic04,teamPic05,teamPic05],
      teamText: [ {name:"Jonathan Sanchez",subTitle:"CEO",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                  {name:"Mario Andrés Díaz",subTitle:"CTO",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                  {name:"Alfonso Díaz",subTitle:"COO",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                  {name:"Mario Andrés Díaz",subTitle:"MARKETING MANAGER",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                  {name:"Jonathan Sanchez",subTitle:"CEO",description:""},
                  {name:"Mario Andrés Díaz",subTitle:"CTO",description:""},
                  {name:"Alfonso Díaz",subTitle:"COO",description:""},
                  {name:"Mario Andrés Díaz",subTitle:"MARKETING MANAGER",description:""},
                  {name:"Mario Andrés Díaz",subTitle:"CTO",description:""}]
    }
  }
}
</script>
