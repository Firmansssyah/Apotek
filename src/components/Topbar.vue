<template>
  <div>
    
    <span class="account" v-on:click="isAccountToogle = !isAccountToogle"></span>
    <div class="account-modal" v-bind:class="{ visible: isAccountToogle }">
      <div class="acc-info">
        <span class="medium-txt" style="font-weight: 450">Mohammad Firmansyah</span><br>
        <i class="small-txt" style="font-style: normal; font-weight: 300">Administrator</i>
      </div>
      <div class="menu">
            <ul>
                <li v-on:click="isAccountToogle = !isAccountToogle"><router-link class="link" to="/profile"><i class="mi mi-Contact"></i> Profile</router-link></li>
                <li><a href="#"><div class="mi mi-PowerButton"></div> Keluar</a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isAccountToogle: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title-app{
  padding: 0px 24px;
  height: 35px;
  float: left;
}
.account{
  float: right;
  margin-right: 20px;
  width: 35px;
  height: 35px;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/user.jpg');
  border-radius: 50%;
  cursor: pointer;
}
.visible{
  visibility: hidden;
}
.account-modal{
  width: 280px;
  background-color: white;
  position: fixed;
  right: 12px;
  top: 54px;
  z-index: 2;
  box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
  .acc-info{
    background-color: #0078D7;
    padding: 12px 20px;
  }
  .menu{
    padding: 10px 0px;
    ul{
      list-style: none;
      li{
        display: grid;
        a{
          text-decoration: none;
          padding: 10px 20px;
          color: #4A5459;
          margin-bottom: 1px;
          .mi{
            padding-right: 20px;
            margin-top: 1px;
          }
        }
        a:hover{
          background-color: rgba(201, 200, 200, 0.26);
        }
      } 
    }
  }
}
</style>
