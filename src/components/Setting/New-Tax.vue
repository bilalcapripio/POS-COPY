<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header mb-5">
                                            <!---Start Third card shop-->
                                            <h2 class="text-md ml-4"><span class="text-lg">Currency </span>  <small class="text-gray text-sm"><span> Add/Update Currency</span></small></h2>
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
                                                                <form @submit.prevent="postData" method="post">
                                                                    <div class="box-body">
                                                                        <div class="form-group">
                                                                            <label for="category" class="col-sm-2 control-label">Tax Name*<label class="text-danger">*</label></label>
                                                                            <div class="col-sm-4">
                                                                                <input type="text" class="form-control input-sm" id="category" name="category" placeholder="Tax Name" v-model="posts.tax_name">
                                                                                <span id="category_msg" style="display:none" class="text-danger"></span>
                                                                            </div>
                                                                        </div>
                                                                    <div class="form-group">
                                                                        <label for="description" class="col-sm-2 control-label">Tax Percentage*</label>
                                                                        <div class="col-sm-4">
                                                                            <input type="text" class="form-control input-sm" id="category" name="category" placeholder="Tax Percentage" v-model="posts.tax_percentage">
                                                                            <span id="description_msg" style="display:none" class="text-danger"></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="">
                                                                    <button class="btn btn-success">Save</button>
                                                                    &nbsp;
                                                                    <button class="btn btn-warning">Close</button>
                                                                </div>
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
                tax_name:'',
                tax_percentage :'',
            }
        }
    },
    methods:{
            postData(e){
                confirm('Do You Wants to Save Record ?')
                const formdata = new FormData();
                formdata.append('tax_name',this.posts.tax_name),
                formdata.append('tax_percentage',this.posts.tax_percentage),

                axios.post("http://192.168.100.9/Project_Laravel/public/api/tax",formdata)
                .then((res)=>{
                    console.log(res);
                    this.posts.tax_name='',
                    this.posts.tax_percentage=''
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