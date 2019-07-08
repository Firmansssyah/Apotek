<template>
  <div class="about content">
    <div class="title-page medium-txt">Data Obat</div>
    <div class="secondary-content" style="margin-bottom: 36px;">
        <div class="col-lg-10">
          <div class="info"><b>Total : </b> 165 obat</div>
          <div class="btn-group">
            <button class="export"><i class="mi mi-Export"></i> Export Data</button>
            <button class="add" @click="modalAddForm=true"><i class="mi mi-Add"></i> Add Data</button>
          </div>
        </div>
        <div class="col-lg-10">
          <table>
            <thead>
              <tr style="border-bottom: 3px solid #e4e3e1; font-weight:bold;">
                <td style="width: 40px;" scope="col">
                  <input type="checkbox">
                </td>
                <td scope="col">KODE OBAT</td>
                <td scope="col">NAMA OBAT</td>
                <td scope="col" style="text-align:center;">STOCK</td>
                <td scope="col">SUPLAYER</td>
                <td scope="col" style="text-align:center;">ACTION</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(drug, index) in drugs" :key="drugs.id">
                <td><input type="checkbox"></td>
                <td data-label="KODE OBAT">{{drug.id}}</td>
                <td data-label="NAMA OBAT">{{drug.drugname}}</td>
                <td data-label="STOCK" style="text-align:center;">
                    {{drug.stock}}
                </td>
                <td data-label="SUPLAYER">{{drug.suplayer}}</td>
                <td data-label="" style="text-align:center;">
                  <span class="mi mi-Error detail ht" title="Detail"></span>
                  <span class="mi mi-Edit edit" title="Edit Data"></span>
                  <span class="mi mi-Delete del" title="Hapus !" @click="delData(index)"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-10 page">
          <a>Previus</a>
          <a>2</a><a class="page-active">3</a><a>4</a><a>5</a> . . . .
          <a>Next</a>
        </div>
    </div>
    <div class="modal-mask" v-if="modalAddForm">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            Add Form Data
            <span style="float: right; cursor: pointer" class="mi mi-Cancel" @click="modalAddForm=false"></span>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Kode Obat</label>
                  <input type="email" class="form-control" placeholder="e.g XXXXX">
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Nama Obat</label>
                  <input type="password" class="form-control" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control"placeholder="1234 Main St">
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>Laki-laki</option>
                    <option>Wanita</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="btn">
              <button class="export" @click="modalAddForm=false">Batal</button>
              <button class="add">Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      modalAddForm: false,
      drugs:[
        { id: "BDRXN",
          drugname: "Bodrexin",
          stock: 143,
          suplayer: "PT. Indomarco"},
        { id: "PYR38",
        drugname: "Puyer 38",
        stock: 46,
        suplayer: "PT. Indomarco"},
        { id: "BLSMG",
        drugname: "Balsem Geliga",
        stock: 100,
        suplayer: "PT. Jaya Mandiri"},
        { id: "MXGRP",
        drugname: "Mixagrip",
        stock: 19,
        suplayer: "PT. Jaya Mandiri"},
        { id: "PLDMX",
        drugname: "Poldanmix",
        stock: 34,
        suplayer: "PT. Jaya Mandiri"},
        { id: "ANKSMG",
        drugname: "Anak Sumang",
        stock: 19,
        suplayer: "PT. Jaya Mandiri"},
        
        ]
    }
  },
  methods:{
    delData(index){
            this.drugs.splice(index, 1)
        },
  }
}
</script>


<style lang="scss" scoped>
  .info{
    float: left;
  }
  .btn-group{
    float: right;
    .export{
      border: none;
      color: rgb(38, 39, 39);
      background-color: rgba(158, 155, 155, 0.192);
      padding: 8px 16px;
      border-radius: 1px;
      cursor: pointer;
      margin: 0px 10px;
    }
    .export:hover{
      background-color: rgba(85, 85, 85, 0.192);
    }
    .add{
      border: none;
      background-color: #0078D7;
      color: white;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 1px;
      cursor: pointer;
    }
    .add:hover{
      background-color: rgb(1, 101, 184);
    }
  }
//shade style
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.329);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 500px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 1px;
  box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
  transition: all .3s ease;
  overflow: hidden;
}
.modal-header{
  background-color: #0078D7;
  padding: 16px;
  color: white;
  h3 {
  margin-top: 0;
  color: #42b983;
  }
}
.modal-header,.modal-body,.modal-footer {
  padding: 16px;  
}
.modal-footer{
  text-align: right;
  .btn{
    button{
      width: 90px;
    }
    .export{
      border: none;
      color: rgb(38, 39, 39);
      background-color: rgba(158, 155, 155, 0.192);
      padding: 8px 16px;
      border-radius: 1px;
      cursor: pointer;
      margin: 0px 10px;
    }
    .export:hover{
      background-color: rgba(85, 85, 85, 0.192);
    }
    .add{
      border: none;
      background-color: #0078D7;
      color: white;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 1px;
      cursor: pointer;
    }
    .add:hover{
      background-color: rgb(1, 101, 184);
    }
  }
}
.modal-default-button {
  float: right;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
// table Style
table {
  border-collapse: collapse;
  margin-top: 30px;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  tr {
    border-bottom: 1px solid #ddd;
    padding: .35em;
  }
  th{
  padding: 12px 0px;
  font-size: 14px;
  letter-spacing: .1em;
  text-transform: uppercase;
  }
  td {
  padding: .625em;
  
  font-size: 12px;
  span{
    background-color: rgb(218, 218, 218);
    margin: 0px 2px;
    padding: 6px;
    border-radius: 2px;
    cursor: pointer;
    }
  .detail:hover{
    background-color: #0078D7;
    color: white;
    transition: 300ms ease-in;
    }
  .del:hover{
    background-color: #D13438;
    color: white;
    transition: 300ms ease-in;
    }
  .edit:hover{
    background-color: #00CC6A;
    color: white;
    transition: 300ms ease-in;
    }
  }
}
.page{
  text-align: center;
  padding: 24px 0px;
  a{
    padding: 4px 8px;
    margin: 0px 2px;
    border-radius: 2px;
    cursor: pointer;
    background-color: #ececec;
    font-weight: 350;
  }
  a:hover{
    background-color: #c7c7c7;
  }
  .page-active{
    background-color: #0078D7 !important;
    color: white;
    font-weight: bold;
    padding: 6px 8px;
  }
}
@media only screen and (max-width: 992px) {
    .modal-container {
      width: 98%;
    }
}
@media screen and (max-width: 600px) {
  .shade{
    padding: 0px 10px;
    .modal{
    width: 100% !important;
  }
  }
  table {
  border: 0;
  margin-top: 60px !important;
  width: 100%;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>
