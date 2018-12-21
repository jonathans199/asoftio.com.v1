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
        <!-- <div class="col-md-4 m-bottom" v-for="(teamItem, index) in teamText" :key="teamItem.id">
            <div class="card">
              <img :src="teamPics[index]" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">{{teamItem.name}}</h4>
                <p class="card-text">{{teamItem.subTitle}}</p>
                <p class="card-description">{{teamItem.description}}</p>
              </div>
            </div>
        </div> -->
        
        <div class="col-md-4 m-bottom">
            <div class="card">
              <img src="@/assets/img/sectionTeam/FOTOS-TEAM-1.jpg" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">Jonathan Sanchez</h4>
                <p class="card-text">Co-founder / Software Engineer</p>
                
                <p class="card-description">Jonathan is almost a native Miamian, he holds an MIS Bachellors from FIU. <p class="card-description">Started coding back in the days when Flash, Frontpage and Fireworks were around. </br> When is is not drumming at a local church on the weekends, he is at the beach or at his daughters ballet dance recitals, with his beautiful wife and 2 dogs + cat + gold fish</p>
              </div>
            </div>
        </div>
        <div class="col-md-4 m-bottom">
            <div class="card">
              <img src="@/assets/img/sectionTeam/FOTOS-TEAM-3.jpg" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">Mario Andrés Díaz</h4>
                <p class="card-text">Co-founder / Software Architect</p>
                <p class="card-description">Mario was a professional baskeball player in his country, until he fell in love with coding, after finishing his Psycology degree. <p class="card-description">He loves backend development, enjoys cooking and outdoor sports</br> Mario almost talks in code, spends his time researching and learning new technologies when his is not barbecuing</p>
              </div>
            </div>
        </div>
        <div class="col-md-4 m-bottom">
            <div class="card">
              <img src="@/assets/img/sectionTeam/FOTOS-TEAM-2.jpg" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">Alfonso Diaz</h4>
                <p class="card-text">Manager / Papa Crypto</p>
                <p class="card-description">Mr. Alfonso, holds a Phd. in Cryptocurrency "if that were a thing".  Not only is he a Lawyer but an Industrial Engineer well prepared to tackle any task.  <p class="card-description">He loves teaching and trading Bitcoin, Litecoin and any Crypto coin that is hot... </br> When he is not at church on the weekends you will find him getting his Vitamin A at the beach</p>
              </div>
            </div>
        </div>
        <div class="col-md-4 m-bottom">
            <div class="card">
              <img src="@/assets/img/sectionTeam/FOTOS-TEAM-4.jpg" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">Angel Rodriguez</h4>
                <p class="card-text">Quality Analyst / Developer</p>
                <p class="card-description">Angel is no ordinary developer, he was a champion swimer in Spain where he developed his passion for phsicall fitness. <p class="card-description">Then got his first Mac and his world changed for the better</br> He learned how to code in Wyncode where he met Jonathan and Mario and began this Coding journey.</p>
              </div>
            </div>
        </div>
        <div class="col-md-4 m-bottom">
            <div class="card">
              <img src="@/assets/img/sectionTeam/FOTOS-TEAM-5.jpg" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">Stephanie Ospina</h4>
                <p class="card-text">Marketing Strategist</p>
                <p class="card-description">Jonathan is almost a native Miamian, he holds an MIS Bachellors from FIU. <p class="card-description">Started coding back in the days when Flash, Frontpage and Fireworks were around. </br> When is is not drumming at a local church on the weekends, he is at the beach or at his daughters ballet dance recitals, with his beautiful wife and 2 dogs + cat + gold fish</p>
              </div>
            </div>
        </div>
        <div class="col-md-4 m-bottom">
            <div class="card">
              <img src="@/assets/img/sectionTeam/FOTOS-TEAM-1.jpg" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title">Ivan Rios</h4>
                <p class="card-text">Full Stack Developer</p>
                <p class="card-description">Ivan is an awesome musician, not only he sings well but he could play just about any instrument there is. <p class="card-description">With a background in Information Technologies, he found that the art of codidng was his calling </br> Ivan loves barbecuing and taking his daughters and wife out for icecream at the mall, where the ice cone could get a bit more expensive with 3 girls.</p>
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
      asoftioTeamEn: "WHO IS ASOFTIO?",
      teamPics: [teamPic01,teamPic03,teamPic02,teamPic04,teamPic05,teamPic01,teamPic03,teamPic02,teamPic04,teamPic05,teamPic05],
      teamText: [ {name:"Jonathan Sanchez",subTitle:"Co-founder / Software Engineer",description:"Jonathan is almost a native Miamian, he holds an MIS Bachellors from FIU. Started coding back in the days when Flash, Frontpage and Fireworks were around.  When is is not drumming at a local church on the weekends, he is at the beach or at his daughters ballet dance recitals, with his beautiful wife and 2 dogs + cat + gold fish"},
                  {name:"Mario Andrés Díaz",subTitle:"Co-founder / Software Architect",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                  {name:"Alfonso Díaz",subTitle:"Papa Crypto",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                  {name:"Angel Rodriguez",subTitle:"Quality Analyst / Developer",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
                  {name:"Stephanie Ospina",subTitle:"Marketing Strategist",description:""},
                  {name:"Evo Morales",subTitle:"Full Stack Developer",description:""},
                 ]
    }
  }
}
</script>
