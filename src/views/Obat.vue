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
                <td scope="col">HARGA JUAL</td>
                <td scope="col">SUPLAYER</td>
                <td scope="col" style="text-align:center;">ACTION</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(drug, index) in sortedArray" :key="drugs.drugID">
                <td><input type="checkbox"></td>
                <td data-label="KODE OBAT">{{drug.drugID}}</td>
                <td data-label="NAMA OBAT">{{drug.drugName}}</td>
                <td data-label="STOCK" style="text-align:center;">
                    {{drug.stock}}
                </td>
                <td>Rp. {{drug.sellingPrice}}</td>
                <td data-label="SUPLAYER">{{drug.suplayer}}</td>
                <td data-label="" style="text-align:center;">
                  <span class="mi mi-Error detail ht" title="Detail"></span>
                  <span class="mi mi-Edit edit" title="Edit Data" @click="modalEditForm=true"></span>
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
    <!-- add form modal -->
    <div class="modal-mask" v-if="modalAddForm">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            Add Form Data
            <span style="float: right; cursor: pointer" class="mi mi-Cancel" @click="modalAddForm=false"></span>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Kode Obat</label>
                <input type="text" class="form-control" placeholder="e.g xxxxx" maxlength="6" v-model="newDrug.drugID">
              </div>
              <div class="form-group">
                <label>Nama</label>
                <input type="text" class="form-control" placeholder="Nama obat" v-model="newDrug.drugName">
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label>Harga Beli</label>
                  <input type="number" class="form-control" placeholder="Rp." v-model="newDrug.purchasePrice">
                </div>
                <div class="form-group col-md-6">
                  <label>Harga Jual</label>
                  <input type="number" class="form-control"placeholder="Rp." v-model="newDrug.sellingPrice">
                </div>
              </div>
              <div class="form-group">
                <label for="satuan">Suplayer</label>
                <select id="suplayer" class="form-control" v-model="newDrug.suplayer">
                  <option selected disabled>Pilih Suplayer</option>
                  <option>PT. Konimex</option>
                  <option>PT. Sehat Abadi</option>
                </select>
              </div>
              <div class="form-group">
                <label>Indikasi</label>
                <input type="text" class="form-control" placeholder="Indikasi obat" v-model="newDrug.indication">
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="satuan">Satuan</label>
                  <select id="suplayer" class="form-control" v-model="newDrug.unit">
                    <option selected disabled>Pilih Satuan Obat</option>
                    <option>Botol</option>
                    <option>Tablet</option>
                    <option>Sirup</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label>Stok</label>
                  <input type="number" class="form-control" placeholder="Stock-Obat" v-model="newDrug.stock">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="btn">
              <button class="export" @click="cancelAddDrug()">Batal</button>
              <button class="add" @click="addDrug()">Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- edit form modal -->
    <div class="modal-mask" v-if="modalEditForm">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            Add Form Data
            <span style="float: right; cursor: pointer" class="mi mi-Cancel" @click="modalEditForm=false"></span>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Kode Obat</label>
                <input type="text" class="form-control" placeholder="e.g xxxxx" maxlength="6" v-model="newDrug.id">
              </div>
              <div class="form-group">
                <label>Nama</label>
                <input type="text" class="form-control" placeholder="Nama obat" v-model="newDrug.drugname">
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="suplayer">Suplayer</label>
                  <select id="suplayer" class="form-control" v-model="newDrug.suplayer">
                    <option selected disabled>Pilih Suplayer</option>
                    <option>PT. Sehat Abadi</option>
                    <option>PT. Makmur Sejahter</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="stock">Stok</label>
                  <input type="number" class="form-control" id="stock" placeholder="Stock-Obat" value="0" v-model="newDrug.stock">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div class="btn">
              <button class="export" @click="cancelAddDrug()">Batal</button>
              <button class="add" @click="addDrug()">Update</button>
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
      modalEditForm: false,
      isAlert: false,
      newDrug: { drugID: "",
                  drugName: "",
                  purchasePrice: "",
                  sellingPrice: "",
                  suplayer: "",
                  indication: "",
                  unit: "",
                  stock: "",},
      drugs:[
        { drugID: "BDRXIN",
          drugName: "Bodrexin",
          purchasePrice: 20000,
          sellingPrice: 22000,
          suplayer: "PT. Konimex",
          indication: "Batuk dan pilek",
          unit: "tablet",
          stock: 143,},
          { drugID: "ANTIMO",
          drugName: "Antimo",
          purchasePrice: 1800,
          sellingPrice: 2000,
          suplayer: "PT. Konimex",
          indication: "Pusing",
          unit: "tablet",
          stock: 143,},
        ]
    }
  },
  computed:{
    sortedArray: function() {
      function compare(a, b) {
        if (a.drugname < b.drugname)
          return -1;
        if (a.drugname > b.drugname)
          return 1;
        return 0;
      }
      return this.drugs.sort(compare).reverse();
    }
  },
  methods:{
    addDrug(){
      this.drugs.push({
          drugID: this.newDrug.drugID,
          drugName: this.newDrug.drugName,
          purchasePrice: parseInt(this.newDrug.purchasePrice),
          sellingPrice: parseInt(this.newDrug.sellingPrice),
          suplayer: this.newDrug.suplayer,
          indication: this.newDrug.indication,
          unit: this.newDrug.unit,
          stock: parseInt(this.newDrug.stock), 
      })
      this.cancelAddDrug();
    },
    cancelAddDrug(){
      this.newDrug.drugID = ""
      this.newDrug.drugName = ""
      this.newDrug.purchasePrice = ""
      this.newDrug.sellingPrice = ""
      this.newDrug.suplayer = ""
      this.newDrug.indication = ""
      this.newDrug.unit = ""
      this.newDrug.stock = ""
      this.modalAddForm=false;
    },
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
  .alert{
    color: #E74856;
    padding: 0px 2px;
    font-size: 10px;
    font-style: normal;  
  }
  .alertInput{
    border-color: #E74856;
    background-color: rgba(231, 72, 85, 0.13);
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
  width: 380px;
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
  padding: 0px 16px 16px 16px;
  .btn{
    button{
      width: 80px;
      border-radius: 1px;
      padding: 6px 14px;
      border: none;
    }
    .export{
      color: rgb(38, 39, 39);
      background-color: rgba(158, 155, 155, 0.192);
      cursor: pointer;
      margin: 0px 10px;
    }
    .export:hover{
      background-color: rgba(85, 85, 85, 0.192);
    }
    .add{
      background-color: #0078D7;
      color: white;
      font-weight: 600;
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
