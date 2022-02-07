<template>
<center>
   <div id='team-member-invite-box'>
      <div id='member-invite-title'> Invite a team member to use chargebee <br>
      You can either let your team members access evrything
      in this site or assign specific role to them <br>
      </div>
      <br>
      <div id='invite-form-div'>
         <form>
            <div class = "component">
               <div class = "a">
                  <br><br>
                  <label  class='check-options' for='member-email'>
                  Email of the member</label><br>
                  <input class='check-names'
                     type='email' name='member-email'
                     id='member-email' v-model='memberEmail'/><br><br>
                  <label>
                     <input class='check-names' type='checkbox' v-model='memberRole' value='Admin'/>
                     <div class='check-names check-options'>Admin</div>
                     <br>
                     <div class='desc'>Access evrything in Chargebee</div>
                  </label><br><br>
                  <br>
                  <label>
                     <input class='check-names' type='checkbox'
                     v-model='memberRole' value='Tech-support'/>
                     <div class='check-names check-options'>Tech Suppport</div>
                     <br>
                     <div class='desc'>
                     User can view "subscription" and
                     "product catalog" tabs.
                     Can also view add comments to, send,
                     download individual credit notes/ invoices.
                     </div>
                  </label><br><br>
                  <br>
                  <label>
                     <input  class='check-names' type='checkbox'
                     v-model='memberRole' value='Analyst'/>
                     <div class='check-names check-options'>Analyst</div>
                     <br>
                     <div class='desc'>
                        In addition to tech support level access,
                        User will have access to SaaS metrics report
                     </div>
                  </label><br><br>
                  <br>
               </div>
               <div class = "b">
                  <input class='submit-button'
                  type='submit'  value='Invite' @click.prevent='inputHandler'/>
               </div>
            </div>
         </form>
      </div>
   </div>
</center>
</template>

<script>

import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      memberEmail: '',
      memberRole: [],
    };
  },
  methods: {
    inputHandler() {
      const newMember = {
        role: this.memberRole[this.memberRole.length - 1],
        email: this.memberEmail,
      };
      this.$store.commit('add', newMember);
      this.$router.push('/');
    },
  },
})

export default class InviteMembers extends Vue {}
</script>

<style>
.component{
   display: flex;
}

.a{
   margin: auto;
   width: 60%;
}

.b{
   margin: auto;
   width: 40%;
   position: relative;
   top: -157px;
}
#team-member-invite-box{
width:100vw;
background-color: #f6f0c4;
background-image: linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%);
padding:20px;
border-radius:20px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
#member-invite-title{
margin-left:70px;
font-weight:bold;
font-size:30px;
display:block;
}

#invite-form-div{
background-color: #f8f9d2;
background-image: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);
padding:20px;
border-radius:20px;
}
.check-names{
   float:left;
}
input{
margin-left:70px;
}
label{
margin-left:70px;
}
.desc{
text-align: left;
margin-left:70px;
 }
.check-options{
float:left;
font-weight:bold;
}

.submit-button{
background-color:rgb(45, 52, 194,0.5);
color:black;
border-radius:5px;
}

</style>
