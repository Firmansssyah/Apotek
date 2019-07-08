<template>
    <div>
        <div class="sidebar">
            <div class="menu">
                <ul>
                    <li>
                        <router-link class="link" to="/"><i class="mi mi-Home"></i> Beranda</router-link>
                        <router-link class="link" to="/pasien"><i class="mi mi-Family"></i> Data Pasien</router-link>
                        <router-link class="link" to="/dokter"><i class="mi mi-PartyLeader"></i> Data Dokter</router-link>
                        <router-link class="link" to="/obat"><i class="mi mi-Link"></i> Data Obat</router-link>
                        <router-link class="link" to="/laporan"><i class="mi mi-Trackers"></i> Laporan</router-link>
                        <router-link class="link" to="/about"><i class="mi mi-Error"></i> About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg : "hello world"
        }
    }
}
</script>

<style scoped lang="scss">
.sidebar{
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #f5f4f2;
    width: 20%;
    padding-top: 82px;
    padding-left: 0px;
    // box-shadow: 0 0.3px 0.9px rgba(0, 0, 0, 0.18), 0 1.6px 3.6px rgba(0, 0, 0, 0.22);
    .menu{
        padding: 0px;
        ul{
            li{
                display: grid; 
                
                a{
                    text-decoration: none;
                    color: rgb(102, 100, 98);
                    padding: 8px 20px;
                    border-left: 4px solid #f5f4f2;
                    font-weight: 400;
                    i{
                        padding-right: 12px;
                    }
                }
                a:hover{
                    background-color: rgba(201, 200, 200, 0.26);
                    border-left: 4px solid rgba(0, 118, 215, 0.137);
                }
                .router-link-exact-active{
                    color: #4C4A48;
                    background-color: #e4e3e1 !important;
                    font-weight: 450;
                    border-left: 4px solid #0078D7 !important;
                }
            }
        }
    }
}
@media only screen and (max-width: 992px) {
    .sidebar{
        left: -200px !important;
    }
}
</style>
