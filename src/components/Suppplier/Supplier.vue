<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2 mb-5">
                            <div class="content-header">
                                            <!---Start Third card shop-->
                                                <h2 class="text-md ml-4"><span class="text-lg">Suppliers </span>  Add / <small class="text-gray text-sm"><span>Update Supplier</span></small></h2>
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
                                                <!---- Start Form --->
                                                <div class="container-fluid bg-light px-3 bg-gray-light">
                                                    <form v-on:submit="PostData" method="post" >
                                                    <div class="row ml-5">
                                                        <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label for="supplier_name" class="col-sm-4 control-label">Supplier Name<label class="text-danger">*</label></label>     
                                                                    <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="supplier_name" name="supplier_name" placeholder="Supplier Name" v-model="posts.supplier_name">
                                                                    <span id="supplier_name_msg" style="display:none" class="text-danger"></span>
                                                                </div>
                                                            </div>
                                                        <div class="form-group">
                                                                    <label for="mobile" class="col-sm-4 control-label">Mobile</label>
                                                                    <div class="col-sm-8">
                                                                <input type="text" class="form-control no_special_char_no_space" id="mobile" name="mobile" placeholder="Mobile" v-model="posts.mobile">
                                                        </div>
                                                        </div>
                                                        <div class="form-group">
                                                                <label for="email" class="col-sm-4 control-label">Email</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="email" name="email" placeholder="Email" v-model="posts.email">
                                                                </div>
                                                        </div>
                                        
                                                        <div class="form-group">
                                                                <label for="phone" class="col-sm-4 control-label">Phone</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control no_special_char_no_space" id="phone" name="phone" placeholder="Phone" v-model="posts.phone">
                                                                </div>
                                                        </div>   
                                                        <div class="form-group">
                                                                <label for="gstin" class="col-sm-4 control-label">GST Number</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="gstin" name="gstin" placeholder="GST Number" v-model="posts.gstNumber">
                                                                </div>
                                                        </div>
                                                        <div class="form-group">
                                                                <label for="tax_number" class="col-sm-4 control-label">TAX Number</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="tax_number" name="tax_number" placeholder="TAX Number" v-model="posts.taxNumber">
                                                                </div>
                                                        </div>
                                                        <!-- ########### -->
                                                    </div>        
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                                <label for="opening_balance" class="col-sm-4 control-label">Opening Balance</label>
                                                                <div class="col-sm-8">
                                                                    <input type="text" class="form-control" id="opening_balance" name="opening_balance" placeholder="Opening Balance" v-model="posts.openingBalance">
                                                                </div>
                                                        </div>
                                                        <div class="form-group">
                                                                <label for="country" class="col-sm-4 control-label">Country</label>        
                                                                <div class="col-sm-8">
                                                                        <select class="form-control select2 select2-hidden-accessible" id="country" name="country" style="width: 100%;" v-model="posts.country" tabindex="-1">
                                                                            <option value="">-Select-</option>
                                                                            <option :value="data.id" v-for="data in countryData" v-bind:key="data.id">
                                                                                {{data.country_name}}
                                                                            </option> 
                                                                        </select>
                                                                </div>
                                                        </div>
                                                        <div class="form-group">
                                                                <label for="state" class="col-sm-4 control-label">State</label>                    
                                                            <div class="col-sm-8">
                                                                    <select class="form-control select2 select2-hidden-accessible" id="state" name="state" style="width: 100%;" v-model="posts.state" tabindex="-1" aria-hidden="true">
                                                                    <option value="">-Select-</option>
                                                                    <option :value="data.id" v-for="data in stateData" v-bind:key="data.id">
                                                                        {{data.state_name}}
                                                                    </option>
                                                                </select>
                                                                </div>
                                                        </div>
                                                        
                                                        <div class="form-group">
                                                            <label for="city" class="col-sm-4 control-label">City</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control " id="city" name="city" placeholder="City" v-model="posts.city">
                                                            </div>
                                                        </div>
                                        
                                                        <div class="form-group">
                                                            <label  class="col-sm-4 control-label">Postcode</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control no_special_char_no_space" id="postcode" name="postcode" placeholder="PostCode" v-model="posts.postCode">
                                                            </div>
                                                        </div>
                                        
                                                        <div class="form-group">
                                                            <label for="address" class="col-sm-4 control-label">Address</label>
                                                            <div class="col-sm-8">
                                                                <textarea type="text" class="form-control" id="address" name="address" placeholder="Address" v-model="posts.address"></textarea>
                                                            </div>
                                                        </div>                
                                                        </div>
                                                        <!-- ########### -->
                                                    </div>
                                                    <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                                                    <div class="box-body mt-5 d-flex mx-auto justify-content-center align-items-center">                        
                                                        <button class="btn btn-success w-25">Save</button>
                                                        &nbsp;
                                                        <button class="btn btn-warning w-25">Close</button>
                                                        <!-- /row -->
                                                    </div>
                                                <!----End From ---->
                                            <br>
                                                <!---Start table---->
                                                <div class="col-md-12 bg-light border-top border-primary mt-5">
                                                    <div class="box">
                                                    <div class="box-header p-3">
                                                        <h3 class="box-title text-blue">Opening Balance Payments</h3>
                                                    </div>
                                                    <!-- /.box-header -->
                                                    <div class="box-body table-responsive no-padding">
                                                        
                                                        <table class="table table-bordered table-hover">
                                                        <thead>
                                                        <tr class="bg-gray">
                                                            <th >#</th>
                                                            <th >Entry Date</th>
                                                            <th >Stock</th>
                                                            <th >Action</th>
                                                            <th >Action</th>
                                                            <th >Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr><td colspan="6" class="text-center text-bold">No Previous Stock Entry Found!!</td></tr>                           </tbody>
                                                        </table>
                                                        
                                                        
                                                    </div>
                                                    <!-- /.box-body -->
                                                    </div>
                                                    <!-- /.box -->
                                                </div>
                                                <!----End Table----->
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
            countryData:[],
            stateData:[],
            posts:{
                country:'',
                state:'',
                supplier_name:'',
                mobile:'',
                email:'',
                phone:'',
                gstNumber:'',
                taxNumber:'',
                openingBalance:'',
                city:'',
                postCode:'',
                address:'',
            }
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    mounted(){
        this.getCountryData();
        this.getStateData();
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
        getStateData: function(){
            axios.get("http://192.168.100.9/Project_Laravel/public/api/state")
            // return promise
            .then((res)=>{
                this.stateData=res.data;
                    console.log(res.data);
                })
                // catch error
            .catch(error =>{
                console.log(error)
            });
        },
            PostData(e){
                confirm('Do You Wants to Save Record ?')
                const formdata = new FormData();
                formdata.append('country_id',this.posts.country),
                formdata.append('state_id',this.posts.state),
                formdata.append('supplier_name',this.posts.supplier_name),
                formdata.append('mobile',this.posts.mobile),
                formdata.append('email',this.posts.email),
                formdata.append('phone',this.posts.phone),
                formdata.append('gst_number',this.posts.gstNumber),
                formdata.append('tax_number',this.posts.taxNumber),
                formdata.append('opening_balance',this.posts.openingBalance),
                formdata.append('city',this.posts.city),
                formdata.append('post_code',this.posts.postCode),
                formdata.append('address',this.posts.address),
                // this.formdata = { headers: { 'Content-Type': 'multipart/formdata' } }
                axios.post("http://192.168.100.9/Project_Laravel/public/api/supplier",formdata)
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

    },

}
</script>