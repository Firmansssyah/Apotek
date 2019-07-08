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
              <tr style="border-bottom: 3px solid #e4e3e1;">
                <th style="width: 40px;" scope="col">#</th>
                <th scope="col">KODE OBAT</th>
                <th scope="col">NAMA OBAT</th>
                <th scope="col">STOCK</th>
                <th scope="col">SUPLAYER</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(drug, index) in drugs" :key="drugs.id">
                <td>{{index+1}}</td>
                <td data-label="KODE OBAT">{{drug.id}}</td>
                <td data-label="NAMA OBAT">{{drug.drugname}}</td>
                <td data-label="STOCK">
                    {{drug.stock}}
                </td>
                <td data-label="SUPLAYER">{{drug.suplayer}}</td>
                <td data-label="">
                  <span class="mi mi-Error detail ht" title="Detail"></span>
                  <span class="mi mi-Edit edit" title="Edit Data"></span>
                  <span class="mi mi-Delete del" title="Hapus !"></span>
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
    <div class="shade" v-if="modalAddForm">
      <div class="modal">
        <div class="modal-content">
          <div class="m-header">
          Add Data Form
        </div>
        <div class="m-body">
          <form>
            <div class="form">
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control input-grup" id="inputEmail4" placeholder="Email">
                </div>
                <div class="form-group col-lg-6">
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control input-grup" id="inputPassword4" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control input-grup" id="inputPassword4" placeholder="Password">
              </div>
            </div>
          </form>
        </div>
        <div class="m-footer">
          <button class="cancel" @click="modalAddForm=false">Batal</button>
          <button class="save">Simpan</button>
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
        { id: "MXGRP",
        drugname: "Mixagrip",
        stock: 19,
        suplayer: "PT. Jaya Mandiri"},
        { id: "MXGRP",
        drugname: "Mixagrip",
        stock: 19,
        suplayer: "PT. Jaya Mandiri"},
        { id: "MXGRP",
        drugname: "Mixagrip",
        stock: 19,
        suplayer: "PT. Jaya Mandiri"},
        { id: "MXGRP",
        drugname: "Mixagrip",
        stock: 19,
        suplayer: "PT. Jaya Mandiri"},
        ]
    }
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
.shade{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0000001f;
  z-index: 9;
  .modal{
    width: 500px;
    background-color: white;
    margin: 0 auto;
    margin-top: 80px;
    box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
    .m-header{
      padding: 14px;
      background-color: #0078D7;
      color: white;
    }
    .m-body{
      padding: 14px;
    }
    .m-footer{
      padding: 20px 14px;
      text-align: right;
      button{
        margin: 0px 4px;
        padding: 6px 10px;
        cursor: pointer;
        border-radius: 2px;
        font-weight: 300;
        border: none;
        width: 80px;
      }
      button:focus{
        outline: none;
      }
      .cancel{
        background-color: #f2f2f2;
      }
      .cancel:hover{
        background-color: rgba(85, 85, 85, 0.192);
      }
      .save{
        background-color: #0078D7;
        color: white;
        font-weight: 400;
      }
      .save:hover{
        background-color: rgb(1, 101, 184);
      }
    }
  }
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
  text-align: center;
  font-size: 14px;
  letter-spacing: .1em;
  text-transform: uppercase;
  }
  td {
  padding: .625em;
  text-align: center;
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
