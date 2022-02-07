<template>
  <center>
    <div class = "hello">
      <div class = "header">
        <div class = "title">
          <h1>{{ msg }}({{list.length?list.length:'0'}})</h1>
        </div>
        <div>
          <button id='invite-button'>
            <router-link style='text-decoration:none' to='/invite'>+ Invite Members</router-link>
          </button>
        </div>
      </div>
      <div class = "body" v-for='member in list' v-bind:key='member.email'><br><br>
        <MemberCard :email='member.email' :role='member.role'/>
      </div>
    </div>
  </center>
</template>

<script lang = "ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MemberCard from '@/components/MemberCard.vue';

@Component({
  components: {
    MemberCard,
  },
  data() {
    return {
      members: [],
    };
  },
  computed: {
    list() {
      return this.$store.state.members;
    },
  },
})

export default class FrontPage extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>

.title{
  position: left;
}

.hello{
width:100vw;
height: relative;
background-color: #f6f0c4;
background-image: linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%);
padding:20px;
border-radius:20px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
}
.header{
  display : flex;
  justify-content: space-around;
}

.body{
background-color: #f8f9d2;
background-image: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);
}

#invite-button{
  margin: 30px;
}

</style>>
