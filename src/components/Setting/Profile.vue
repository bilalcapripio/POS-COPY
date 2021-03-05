<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2 mb-5">
                                <div class="content-header">
                                    <div class="container-fluid">
                                            <!-- alert start -->
                                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                    <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true" class="text-white">&times;</span>
                                                </button>
                                                </div>
                                            <!-- alert end -->
                                            <form class="bg-light p-3"  v-on:submit="updata" method="post">
                                                <div class="row ml-5">
                                                    <div class="col-md-6">  
                                                    <div class="form-group">
                                                        <label class="col-sm-4 control-label">Company Name<label class="text-danger">*</label></label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" placeholder="" v-model="posts.company_name">    
                                                    </div>
                                                    </div>
                                                        <div class="form-group">
                                                        <label for="mobile" class="col-sm-4 control-label">Mobile<label class="text-danger">*</label></label>
                                                    <div class="col-sm-8">
                                                        <input type="number" class="form-control" placeholder=""  v-model="posts.mobile">
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <label for="email" class="col-sm-4 control-label">Email<label class="text-danger">*</label></label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" placeholder=""  v-model="posts.email">
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <label for="phone" class="col-sm-4 control-label">Phone</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" class="form-control"  placeholder="" v-model="posts.phone">
                                                    </div>
                                                    </div>   
                                                    <div class="form-group">
                                                    <label for="gstin" class="col-sm-4 control-label">GST Number</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" placeholder="" v-model="posts.gst">
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <label for="vat" class="col-sm-4 control-label">VAT Number</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" class="form-control"  placeholder="" v-model="posts.vat">
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <label for="pan" class="col-sm-4 control-label">PAN Number</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" class="form-control" placeholder="" v-model="posts.pan">
                                                    </div>
                                                    </div>                          
                                                    <div class="form-group">
                                                    <label  class="col-sm-4 control-label">Website</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" placeholder="" v-model="posts.website">
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <label class="col-sm-4 control-label">UPI Id</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" class="form-control" placeholder="" v-model="posts.upi">
                                                    </div>
                                                    </div>
                                                    <div class="form-group">
                                                    <label class="col-sm-4 control-label">UPI Code</label>
                                                    <div class="col-sm-8">
                                                        <input type="file" @change="preview2">
                                                        <span  style="display:block;" class="text-danger">Max Width/Height: 1000px * 1000px &amp; Size: 1024kb </span>
                                                    </div>
                                                    </div>  
                                                    <div class="form-group">
                                                        <div class="col-sm-8 col-sm-offset-4">
                                                            <img class="img-fluid w-50" style="border:3px solid #d2d6de;" src="../../assets/Img/admin.png">
                                                        </div>
                                                    </div>
                                                    <!-- ########### -->
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                            <label  class="col-sm-4 control-label">Bank Details</label>
                                                            <div class="col-sm-8">
                                                                <textarea type="text" class="form-control" placeholder=""  v-model="posts.bank">HBL</textarea>
                                                            </div>
                                                            </div>
                                                            <div class="form-group">
                                                            <label for="country" class="col-sm-4 control-label">Country</label>
                                                            <div class="col-sm-8">
                                                            <select class="form-control" style="width: 100%;"  v-model="posts.country">
                                                                <option value="">-Select-</option>
                                                                <option selected="" value="1">Pakistan</option>
                                                                <option selected="" value="2">Turkey</option>
                                                                <option selected="" value="3">USA</option>
                                                                <option selected="" value="4">Pakistan</option>
                                                                <option selected="" value="5">Iran</option>
                                                                <option selected="" value="6">Netherland</option>
                                                                <option selected="" value="7">Ireland</option>
                                                                <option selected="" value="8">New Work</option>

                                                            </select>
                                                            </div>
                                                            </div>
                                                            <div class="form-group">
                                                            <label for="state" class="col-sm-4 control-label">State</label>       
                                                            <div class="col-sm-8">
                                                                <select class="form-control" style="width: 100%;"  v-model="posts.state">
                                                                    <option value="1">-Select-</option>
                                                                    <option value="2">Karachi</option>
                                                                    <option value="3">Islamabad</option>
                                                                    <option value="4">Lahore</option>
                                                                    <option value="5">Faislabad</option>
                                                                    <option value="6">Karachi</option>
                                                                    <option value="7">Islamabad</option>
                                                                    <option value="8">Lahore</option>
                                                                    <option value="9">Faislabad</option>
                                                                </select>
                                                            </div>
                                                            </div>
                                                            <div class="form-group">
                                                            <label for="city" class="col-sm-4 control-label">City<label class="text-danger">*</label></label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control" placeholder="test"  v-model="posts.city">
                                                            </div>
                                                            </div>
                                                            <div class="form-group">
                                                            <label for="postcode" class="col-sm-4 control-label">Postcode</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" class="form-control"  placeholder=""  maxlength="6"  v-model="posts.postcode">
                                                            </div>
                                                            </div>
                                                            <div class="form-group">
                                                            <label for="address" class="col-sm-4 control-label">Address<label class="text-danger">*</label></label>
                                                            <div class="col-sm-8">
                                                                <textarea type="text" class="form-control" placeholder=""  v-model="posts.addresses"></textarea>
                                                            </div>
                                                            </div>
                                                            <div class="form-group">
                                                            <label for="company_logo" class="col-sm-4 control-label">Company Logo</label>
                                                            <div class="col-sm-8">
                                                                <input type="file" @change="preview">
                                                                <span  style="display:block;" class="text-danger">Max Width/Height: 1000px * 1000px &amp; Size: 1024kb </span>
                                                            </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <div class="col-sm-8 col-sm-offset-4">
                                                                    <img class="img-fluid w-50" style="border:3px solid #d2d6de;" src="../../assets/Img/admin.png">
                                                                </div>
                                                            </div>
                                                                                        
                                            
                                                            
                                                        </div>
                                                    <!-- ########### -->
                                                </div>
                                                <hr>
                                                <div class="box-footer p-5">
                                                    <div class="d-flex mx-auto justify-content-center">
                                                        <button class="btn btn-primary w-25 btn-lg">Update</button>
                                                        &nbsp;
                                                        <button class="btn btn-warning w-25 btn-lg">Close</button>
                                                    </div>                            
                                                </div>
                                            </form>    

                                    </div>
                                </div>        
                        </div> 
                    <!-- /.content-wrapper -->
                    <Footer/>
                    <Sidebar/>
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
            posts:{
                company_name:"",
                mobile:"",
                email:"",
                phone:"",
                gst:"",
                vat:"",
                pan:"",
                website:"",
                upi:"",
                upicode:"",
                bank:"",
                country:"",
                state:"",
                city:"",
                postcode:"",
                addresses:"",
                logo:"",
            },
        }
    },
    methods:{
        updata(e){
            confirm('Do You Wants to Save Record ?')
            const formdata = new FormData();
            formdata.append('company_name',this.posts.company_name),
            formdata.append('city',this.posts.city),
            formdata.append('country_id',this.posts.country),
            formdata.append('mobile',this.posts.mobile),
            formdata.append('email',this.posts.email),
            formdata.append('phone',this.posts.phone),
            formdata.append('state_id',this.posts.state),
            formdata.append('gst_number',this.posts.gst),
            formdata.append('vat_number',this.posts.vat),
            formdata.append('pan_number',this.posts.pan),
            formdata.append('website',this.posts.website),
            formdata.append('upi_id',this.posts.upi),
            formdata.append('upi_code',this.posts.upicode),
            formdata.append('bank_details',this.posts.bank),
            formdata.append('postcode',this.posts.postcode),
            formdata.append('address',this.posts.addresses),
            formdata.append('company_logo',this.posts.logo),
            // this.formdata = { headers: { 'Content-Type': 'multipart/formdata' } }
            axios.post("http://192.168.100.9/Project_Laravel/public/api/company_profile",formdata)
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
        preview(event){
            // console.log(event.target.files[0].name)
            this.posts.logo=event.target.files[0].name
        },
        preview2(event){
            // console.log(event.target.files[0].name)
            this.posts.upicode=event.target.files[0].name
        }
    
    }

    }
</script>

<style lang="stylus">

</style>