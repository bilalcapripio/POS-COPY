<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                        <div class="content-header">
                                            <!---Start Third card shop-->
                                            <h2 class="text-md ml-4"><span class="text-lg">Payment Types Add</span>   / <small class="text-gray text-sm"><span>Update Records</span></small></h2>
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
                                            <div class="card border-top border-primary">
                                                <div class="card-body py-5">
                                                    <form class="form-inline" v-on:submit="PostPayment" method="post" >
                                                        <div class="form-group">
                                                            <label>Payment Type Name &nbsp;<span class="text-danger">*</span></label>
                                                            <input type="text"  class="form-control mx-sm-3" style="width:400px;" required  v-model="posts.payments">  
                                                        </div>
                                                    <input type="submit" class="btn btn-danger  px-5" value="Save" @click="Redirect()" style="width:200px;">                                                    &nbsp;
                                                    <button type="button" class="btn btn-warning" style="width:200px;"> Close</button>
                                                    </form>
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
    name:'New-Customer',
    components: {
    Navbar,
    Sidebar,
    Footer
    },
    data(){
        return{
            // test:"Greepeer",
            posts:{
                payments:"",
            },
        }
    },
    methods:{
        PostPayment(e){
            confirm('Do You Wants to Save Record ?')
            const formdata = new FormData();
            formdata.append('payment_type_name',this.posts.payments),
            // this.formdata = { headers: { 'Content-Type': 'multipart/formdata' } }
            axios.post("http://192.168.100.9/Project_Laravel/public/api/payment_type",formdata)
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
        Redirect(){
            setTimeout("window.location='/Payment'",3000);
            }

    }

    }
</script>
