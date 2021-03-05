<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                    <div class="content-header">
                                            <!---Start Third card shop-->
                                            <h2 class="text-md ml-4"><span class="text-lg"> State </span>  Add / <small class="text-gray text-sm"><span>Update State</span></small></h2>
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
                                                                <form @submit="statePost">
                                                                    <div class="box-body">
                                                                        <div class="form-group">
                                                                            <label for="category" class="col-sm-2 control-label">State Name<label class="text-danger">*</label></label>
                                                                        <div class="col-sm-4">
                                                                        <input type="text" class="form-control input-sm" id="state_name" name="state_name" placeholder="State Name" v-model="posts.state_name" >
                                                                            <span id="category_msg" style="display:none" class="text-danger"></span>
                                                                        </div>
                                                                        </div> 
                                                                        <div class="form-group">
                                                                            <label for="country_name" class="col-sm-2 control-label">Country<label class="text-danger">*</label></label>
                                                                            <div class="col-sm-4">
                                                                            <select class="form-control" id="country" name="country" v-model="posts.country" style="width: 100%;">
                                                                                    <option value="">-Select-</option>
                                                                                    <option v-for="country in countryData" v-bind:key="country.id" :value="country.id">
                                                                                        {{country.country_name}}
                                                                                    </option>
                                                                                </select>
                                                                            <span id="country_msg" style="display:none" class="text-danger"></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="btn btn-success">Save</button>
                                                                    &nbsp;
                                                                    <button class="btn btn-warning">Close</button>
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
    data(){
        return{
            countryData:[],
            posts:{
                country:'',
                state_name:''
            }
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    mounted(){
        this.getCountryData()
    },
    methods:{
        getCountryData: function(){
            axios.get("http://192.168.100.9/Project_Laravel/public/api/country")
                // return promise
            .then((res)=>{
                this.countryData=res.data;
                    console.log(res.data);
            })
                // catch error
            .catch(error =>{
                console.log(error)
            });
        },
        statePost: function(e){
            const formdata = new FormData();
            formdata.append('country_id',this.posts.country),
            formdata.append('state_name',this.posts.state_name),
            // this.formdata = { headers: { 'Content-Type': 'multipart/formdata' } }
            axios.post("http://192.168.100.9/Project_Laravel/public/api/state",formdata)
            // return promise
            .then((res)=>{
                console.log(res);
                this.posts.country = ''
                this.posts.state_name = ''
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
            // show data [testing]
            console.table(this.posts);
            // submit data without page reload 
            e.preventDefault();
        }

    }

}
</script>