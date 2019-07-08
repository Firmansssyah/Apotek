<template>
  <div id="app">
    <div id="top">
      <TopBar/>
    </div>
    <div id="sidebar">
      <Sidebar/>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import TopBar from '@/components/Topbar.vue'
export default {
  name: 'home',
  components: {
    Sidebar,TopBar
  }
}
</script>

<style src='./assets/css/grid.min.css'></style>
<style src='./assets/micon_nb/css/micon_nb.min.css'></style>
<style lang="scss">
*{margin: 0px; padding: 0px; font-size: 12px;}
$bg-color : #faf9f8;
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#top{
  background-color: #0078D7;
  width: 100%;
  padding: 6px 0px;
  z-index: 9;
  position: fixed;
  color: white;
  box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
}
#sidebar{
  width: 20%;
  float: left;
}
#content{
  width: 80%;
  float: right; 
  min-height: 585px;
}
.content{
  padding: 80px 20px 10px 40px;
}
.secondary-content{
  padding: 10px 10px 0px 0px;
}
.title-page{
  padding: 0px 0px 6px 0px;
  font-weight: 450;
}
.medium-txt{
  font-size: 16px;
}
.small-txt{
  font-size: 12px;
}
// style for input
label{
  font-size: 12px;
}
input, select{
  margin: 6px 0px;
  padding: 6px 8px;
  border: 1px solid #a8a8a8;
}
input:focus,select:focus{
  outline: none;
  border: 1px solid #0078D7;
  background-color: rgba(0, 118, 215, 0.062);
}
input:hover{
  border: 1px solid #0078D7;
  transition: 300ms;
}
option{
  padding: 10px;
}
//style for form
.form-row {
  display: -ms-flexbox;
  display: flex;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row > .col,
.form-row > [class*="col-"] {
  margin-right: 5px;
  margin-left: 5px;
}
.form-group {
  margin-bottom: 1rem;
}
.form-control {
  display: block;
  width: 100%;
  font-weight: 400;
  box-sizing: border-box;
}
// style for modal
.modal-content {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
}
.m-body{
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
}
@media only screen and (max-width: 992px) {
    #content{
      width: 100%;
      float: right; 
      min-height: 585px;
    }
    .content{
    padding: 80px 20px 10px 20px;
    }
}
</style>
