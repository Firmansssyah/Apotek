<template>
  <div class="home content">
    <div class="title-page medium-txt">Beranda</div>
    <div class="secondary-content" style="margin-bottom: 36px;">
      <div class="row">
        <div class="col-lg-3 col-sm-6 col-xs-6">
          <div class="divider">
            <div class="card">
                <div class="centered">
                  <img src="../assets/icon/patient.png" class="icon">
                </div>
                <div style="padding-bottom: 8px;"><b class="medium-txt">Pasien</b></div>
                <p class="small-txt">Data-data pasien, transaksi dll...</p>
                <div class="link">
                  <router-link class="small-txt" to="/about">Kelola Data</router-link>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-6">
          <div class="divider">
            <div class="card">
                <div class="centered">
                  <img src="../assets/icon/doctor.png" class="icon">
                </div>
                <div style="padding-bottom: 8px;"><b class="medium-txt">Dokter</b></div>
                <p class="small-txt">Data-data pasien, transaksi dll...</p>
                <div class="link">
                  <router-link class="small-txt" to="/about">Kelola Data</router-link>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-6">
          <div class="divider">
            <div class="card">
                <div class="centered">
                  <img src="../assets/icon/drugs.png" class="icon">
                </div>
                <div style="padding-bottom: 8px;"><b class="medium-txt">Obat</b></div>
                <p class="small-txt">Data-data pasien, transaksi dll...</p>
                <div class="link">
                  <router-link class="small-txt" to="/obat">Kelola Data</router-link>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-xs-6">
          <div class="divider">
            <div class="card">
                <div class="centered">
                  <img src="../assets/icon/report.png" class="icon">
                </div>
                <div style="padding-bottom: 8px;"><b class="medium-txt">Laporan</b></div>
                <p class="small-txt">Data-data pasien, transaksi dll...</p>
                <div class="link">
                  <router-link class="small-txt" to="/about">Kelola Data</router-link>
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    <div class="title-page medium-txt">Statistik</div>
    <div class="container-fluid secondary-content" style="margin-bottom: 36px;">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia aspernatur vitae, earum officiis provident. Voluptas a saepe suscipit illum, dolor officiis dignissimos natus similique possimus perferendis ipsam dolorem? Assumenda.
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  
}
</script>
<style scoped lang="scss">
  .divider{
    padding: 10px 16px 16px 16px;
    .card{
    box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
    border-radius: 2px;
    padding: 30px 10px 30px 10px;
    text-align: center;
    .icon{
      width: 60px;
      height: 60px;
      padding-bottom: 16px;
      margin: 0 auto;
    }
    .link{
      padding-top: 22px;
      a{
        text-decoration: none; 
        color: white;
        background-color: #0078D7;
        padding: 8px 10px;
        border-radius: 2px;
        box-shadow: 0px 0px 8px #0076d746;
      }
    }
    }
  }
  @media only screen and (max-width: 992px) {
    .divider{
    padding: 16px;
    }
}
</style>