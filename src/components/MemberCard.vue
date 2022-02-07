<template>
<center>
    <div class="member-card">
      <div class="member-email">{{ email }}</div>
      <div class="member-role">({{ role }})</div>
      <br>
        <div class = "line">
          <div>
            <button>
              <router-link style='text-decoration:none' :to="{name:'EditMemberData',
              params:{email:email}}">Edit</router-link></button>
          </div>
          <div>
            <button style='margin-left:20px' v-on:click='removeMemberButton(email)'>Remove</button>
          </div>
        </div>
    </div>
    </center>
</template>

<script lang='ts'>

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({

  methods: {
    removeMemberButton(email) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm(`Do you want to remove ${email}?`) === true) {
        this.$store.commit('remove', email);
      }
    },
  },
})
export default class MemberCard extends Vue {
    @Prop() private email!: string;

    @Prop() private role!: string;
}
</script>

<style>

.member-card{
padding: 10px;
width: 100%;
min-height: 100%;
position: relative;
border-bottom: 2px solid black;
}

button{
  background-image: linear-gradient(#42A1EC, #0070C9);
  border: 1px solid #0077CC;
  border-radius: 10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  direction: ltr;
  display: block;
  font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size:14px;
  font-weight: 400;
  letter-spacing: -.022em;
  line-height: 1.47059;
  min-width: 10px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

button:disabled {
  cursor: default;
  opacity: .3;
}

button:hover {
  background-image: linear-gradient(#51A9EE, #147BCD);
  border-color: #1482D0;
  text-decoration: none;
}

button:active {
  background-image: linear-gradient(#3D94D9, #0067B9);
  border-color: #006DBC;
  outline: none;
}

button:focus {
  box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
  outline: none;
}

.member-email{
font-weight:bold;
}

.line{
  display: inline-flex;
}
</style>
