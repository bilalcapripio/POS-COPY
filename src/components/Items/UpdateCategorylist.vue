<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                        <!---Start Third card shop-->
                                        <h2 class="text-md ml-4"><span class="text-lg lead">Update Category</span></h2>
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
                                                            <h5 class="card-header">Featured</h5>
                                                            <h5 class="card-header display-4">Please Enter Valid Data</h5>
                                                            <div class="card-body">
                                                            <form @submit.prevent="postData">
                                                                <div class="box-body">
                                                                    <div class="form-group">
                                                                        <label for="category" class="col-sm-2 control-label">Category Name<label class="text-danger">*</label></label>
                                                                <div class="col-sm-4">
                                                                    <input type="text" class="form-control input-sm" id="category" name="category" placeholder="Category Name" v-model="posts.category_name">
                                                                            <span id="category_msg" style="display:none" class="text-danger"></span>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                        <label for="description" class="col-sm-2 control-label">Description</label>
                                                                        <div class="col-sm-4">
                                                                            <textarea type="text" class="form-control" id="description" name="description" placeholder="Description" v-model="posts.desc"></textarea>
                                                                            <span id="description_msg" style="display:none" class="text-danger"></span>
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
            posts:{
                category_code:'101',
                category_name:'',
                desc:'',
            }
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    mounted(){
        this.id=this.$route.params.id;
        this.editData();
    },
    methods:{
             editData(){
            const UpApi ='http://192.168.100.9/Project_Laravel/public/api/item_category/'+this.id;
            axios.get(UpApi)
            // return promise
            .then((res)=>{
                console.log(res.data);
                this.posts.category_name = res.data.category_name
                this.posts.desc = res.data.description
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
        },

            postData(e){
                confirm('Do You Wants to Save Record ?')    
                const UpApi ='http://192.168.100.9/Project_Laravel/public/api/item_category/'+this.id;
                axios.put(UpApi,{
                    category_name:this.posts.category_name,
                    description:this.posts.desc,
                    category_code:this.posts.category_code,
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