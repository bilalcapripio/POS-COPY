<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                                <!---Start Third card shop-->
                                                <h2 class="text-md ml-4"><span class="text-lg">Update Country</span></h2>
                                                <!-- alert start -->
                                                <div class="content-header">
                                                    <div class="container-fluid">
                                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                        <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true" class="text-white">&times;</span>
                                                        </button>
                                                    </div>
                                                    </div>
                                                </div>                  
                                                <!-- alert end -->
                                                <!---Start Porduct Table>-->
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                                <div class="card">
                                                                    <h5 class="card-header display-5">Please Enter Valid Data</h5>
                                                                    <div class="card-body">
                                                                    <form @submit="postData" method="post">
                                                                        <div class="box-body">
                                                                            <div class="form-group">
                                                                                    <label  class="col-sm-2 control-label">Country Name<label class="text-danger">*</label></label>
                                                                                <div class="col-sm-4">
                                                                                    <input type="text" class="form-control input-sm"  name="country_name" v-model="posts.country_name" required>
                                                                                </div>
                                                                            </div> 
                                                                        </div>
                                                                        <input type="submit" class="btn btn-danger px-5" value="Save">
                                                                        &nbsp;
                                                                        <input type="button" class="btn btn-warning px-5" value="Close">
                                                                    </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--End Product Table-->
                                        </div>
                                </div> 
                            <Footer/>
                            <Sidebar/>
                        </div> 
                    <!-- /.content-wrapper -->
            </div>
        </body>
</template>
<script>

import Navbar from  '../../components/Navbar.vue'
import Sidebar from '../../components/Sidebar.vue'
import Footer from  '../../components/Footer.vue'
import axios from 'axios'

export default {
    name:'',
    components: {
    Navbar,
    Sidebar,
    Footer
},
data(){
        return{
            posts:{
                country_name :""
            },
        }
    },
    mounted(){
        this.id=this.$route.params.id;
        this.editData();
    },
    methods:{
           editData(){
            const UpApi ='http://192.168.100.9/Project_Laravel/public/api/country/'+this.id;
            axios.get(UpApi)
            // return promise
            .then((res)=>{
                console.log(res.data);
                this.posts.country_name = res.data.country_name
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
        },

            postData(e){
                confirm('Do You Wants to Save Record ?')    
                const UpApi ='http://192.168.100.9/Project_Laravel/public/api/country/'+this.id;
                axios.put(UpApi,{
                    country_name:this.posts.country_name,

                })
                // return promise
                .then((res)=>{
                    console.log(res);
                })
                // catch error
                .catch(error =>{
                    console.log(error)
                });
                // show data [testing]
                console.table(this.posts);
                // submit data without page reload 
                e.preventDefault();
        },

    }

}
</script>