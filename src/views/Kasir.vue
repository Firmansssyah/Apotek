<template>
  <div class="about content">
    <div class="title-page medium-txt">Kasir</div>
    <div class="secondary-content" style="margin-bottom: 36px;">
      <div class="col-lg-8">
        <input type="text" @blur="result = false" @keypress="showResult()" v-model="keyword" style="width: 60%;padding: 10px 8px;" placeholder="Cari kode obat atau nama obat...">
      </div>
      <div class="col-lg-8">
        <div class="result" v-if="result">
          <ul>
            <li v-for="(cart, index) in sortedArray" :key="cart.drugID">
              {{cart.drugName}}
              <span class="mi mi-Add detail ht" style="float: right;"></span>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div class="col-lg-8">
        <table>
          <thead>
            <tr style="border-bottom: 3px solid #e4e3e1; font-weight:bold;">
              <td style="width: 40px;" scope="col">
                #
              </td>
              <td scope="col">KODE OBAT</td>
              <td scope="col">NAMA OBAT</td>
              <td scope="col" style="text-align:center;">QTY</td>
              <td scope="col">HARGA</td>
              <td scope="col">JUMLAH</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in sortedArray" :key="cart.drugID">
              <td>{{index+1}}</td>
              <td data-label="KODE OBAT">{{cart.drugID}}</td>
              <td data-label="NAMA OBAT">{{cart.drugName}}</td>
              <td data-label="QTY" style="text-align:center;">
                  <input style="width:36px;" type="number" v-model="cart.qty">
              </td>
              <td>Rp. {{formatPrice(cart.price)}}</td>
              <td>
                Rp. {{formatPrice(cart.qty * cart.price)}}
                <span style="float:right;cursor:pointer;padding:4px 6px; color:#E74856" class="mi mi-Delete" @click="removeItem(index)"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4">
        <div class="count-content">
          <div class="box">
            <table style="margin-top: 0px;">
              <tr>
                <td>Total Harga</td>
                <td>: RP. {{formatPrice(countTotals())}}</td>
              </tr>
              <tr>
                <td>Bayar</td>
                <td>: Rp. <input type="number" style="width:60px;" v-model="bayar"></td>
              </tr>
              <tr>
                <td>Kembali</td>
                <td>: Rp. {{formatPrice(casback())}}</td>
              </tr>
            </table>
            <div class="btn-grup">
              <button>Batal</button>
              <button class="btn-transaksi">transaksi</button>
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
    total: 0,
    bayar:0,
    keyword:"",
    result: false,
    carts:[
        { drugID: "BDRXIN",
          drugName: "Bodrexin",
          qty: 10,
          price: 2200,},
        { drugID: "ANTIMO",
          drugName: "antimo",
          qty: 10,
          price: 2000,},
        { drugID: "PASJOO",
          drugName: "Puyer 38",
          qty: 10,
          price: 3000,},
        { drugID: "ASJASJ",
          drugName: "Anak Sumang",
          qty: 5,
          price: 1500,},
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
      return this.carts.sort(compare).reverse();
    }
  },
  methods:{
    countTotals(){
      let total = 0;
      for(let i in this.carts) {
          total += this.carts[i].qty * this.carts[i].price;
      }
      return this.total = total;
    },
    formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    casback(){
      let kali;
      this.kembali = this.total - this.bayar
      kali = this.kembali * 2
      this.kembali = this.kembali - kali
      if(this.kembali < 0){
          this.kembali = 0
      }
      return this.kembali
    },
    removeItem(index){
      this.carts.splice(index, 1)
    },
    showResult(){
      this.result = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.result{
  background-color: #f5f4f2;
  position: absolute;
  width: 60%;
  padding: 9px;
  margin-top: -6px;
  box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
  z-index: 2;
  ul{
    list-style: none;
    li{
      padding: 10px;
    }
  }
}
.count-content{
  margin-top: 30px;
  padding: 10px 20px;
  .box{
    background-color: #f5f4f2;
    margin-top: 20px;
    padding: 10px 20px 0px 20px;
    border-radius: 2px;
    .btn-grup{
      padding: 15px 0px;
      text-align: right;
      button{
        border: none;
        margin-left: 8px;
        width: 70px;
        padding: 6px 8px;
        border-radius: 2px;
        cursor: pointer;
      }
      .btn-transaksi{
        background-color: #0078D7;
        color: white;
        transition: 300ms ease-out;
      }
      .btn-transaksi:hover{
        background-color: rgb(5, 106, 189);
        transition: 300ms ease-in;
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
</style>
