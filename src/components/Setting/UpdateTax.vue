<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                    <div class="content-header">
                                                    <!---Start Third card shop-->
                                                    <h2 class="text-md ml-4"><span class="text-lg">Update Tax</span></h2>
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
                                                        <form @submit.prevent="postData">
                                                        <div class="card-body ">
                                                            <div class="row">
                                                                <div class="col-md-7">
                                                                  
                                                                        <div class="form-group">
                                                                            <label for="exampleInputEmail1"> Tax Name <span class="text-danger">*</span></label>
                                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" v-model="tax_name">
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputPassword1">Tax Percentage <span class="text-danger">*</span></label>
                                                                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" v-model="tax_percent">
                                                                        </div>
                                                                   
                                                                </div>
                                                                <div class="col-md-5"></div>
                                                            </div>
                                                        </div>
                                                        <div class="card-footer">
                                                                    <button type="submit" class="btn btn-danger">Save</button>
                                                                    &nbsp;
                                                                    <button type="submit" class="btn btn-warning">Close</button>
                                                        </div>
                                                         </form>
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
            taxData:[],
            tax_name:'',
            tax_percent:''
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    mounted(){
        // this.getTaxData()
        this.id=this.$route.params.id;
        this.editData();
    },
    methods:{
        editData(){
            const UpApi ='http://192.168.100.9/Project_Laravel/public/api/tax/'+this.id;
            axios.get(UpApi)
            // return promise
            .then((res)=>{
                console.log(res.data);
                this.tax_name = res.data.tax_name
                this.tax_percent = res.data.tax
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
        },

            postData(e){
                confirm('Do You Wants to Save Record ?')    
                const UpApi ='http://192.168.100.9/Project_Laravel/public/api/tax/'+this.id;
                axios.put(UpApi,{
                    tax_name:this.tax_name,
                    tax:this.tax_percent,
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