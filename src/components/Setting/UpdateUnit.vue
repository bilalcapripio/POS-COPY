<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                    <div class="content-header">
                                                    <!---Start Third card shop-->
                                                    <h2 class="text-md ml-4"><span class="text-lg">Update Unit</span></h2>
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
                                                    <div class="card container-fluid">
                                                        <div class="card-body ">
                                                            <div class="row">
                                                                <div class="col-md-7">
                                                                    <form>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputEmail1"> Unit Name <span class="text-danger">*</span></label>
                                                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputPassword1">Unit Percentage <span class="text-danger">*</span></label>
                                                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div class="col-md-5"></div>
                                                            </div>
                                                        </div>
                                                        <div class="card-footer">
                                                                    <button type="button" class="btn btn-danger">Save</button>
                                                                    &nbsp;
                                                                    <button type="button" class="btn btn-warning">Close</button>
                                                        </div>
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
            taxData:[]
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    mounted(){
        this.getTaxData()
    },
    methods:{
        getTaxData: function(){
            axios.get("http://192.168.100.9/Project_Laravel/public/api/tax")
                // return promise
            .then((res)=>{
                this.taxData=res.data;
                    console.log(res.data);
            })
                // catch error
            .catch(error =>{
                console.log(error)
            });
        },
        deleteData: function(id,index) {
            this.taxData.splice(index,1)
            axios.delete('http://192.168.100.9/Project_Laravel/public/api/tax/' + id)
            .then((res)=>{
                console.log(res);
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
        },
    }

}
</script>