<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2 mb-5">
                            <div class="container-fluid">
                                    <h1 class="lead pt-3 px-3">Update Customer <span class="text-sm">add  customer</span> </h1>
                                            <!-- alert start -->
                                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true" class="text-white">&times;</span>
                                                </button>
                                                </div>
                                            <!-- alert end -->
                                            <!--Start Calculation -->
                                            <div class="container border-top mx-auto">
                                                <br>
                                                <form v-on:submit="PostData" method="post">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <!-- <form> -->
                                                                <label>Customer Name <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="Customer name" name="customer" v-model="posts.customer" required>
                                                                <br>
                                                                <label>Mobile <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="Last name" name="mobile" v-model="posts.mobile" required>
                                                                <br>
                                                                <label>Email <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="Email name" name="email" v-model="posts.email" required>
                                                                <br>
                                                                <label>Phone <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="Last name" name="phone" v-model="posts.phone" required>
                                                                <br> 
                                                                <label>GST Number <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="Last name" name="gst" v-model="posts.gst" required>
                                                                <br> 
                                                                <label>Tax Number <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="Last name" name="tax" v-model="posts.tax" required>
                                                            </div>
                                                            <div class="col-md-4 offset-md-2">
                                                                <label><span>Opening Balance <span class="text-danger">*</span></span></label>
                                                                <input type="text" class="form-control" placeholder="First name" name="balance" v-model="posts.balance" required>
                                                                <br>
                                                                <label>Country <span class="text-danger">*</span></label>
                                                                <select id="inputState" class="form-control" v-model="posts.country">
                                                                    <option selected>Choose...</option>
                                                                    <option value=1>Pakistan</option>
                                                                    <option value=1>12</option>
                                                                    <option value=1>Pakistan</option>
                                                                    <option value=1>Pakistan</option>
                                                                    <option value=1>Pakistan</option>
                                                                </select>
                                                                <br>  
                                                                <label>State <span class="text-danger">*</span></label>
                                                                <select id="inputState" class="form-control" v-model="posts.state">

                                                                    <option selected>Choose...</option>
                                                                    <option value=1>Karachi</option>
                                                                    <option value=2>Lahore</option>
                                                                    <option value=3>Peshawar</option>
                                                                    <option value=4>Quetta</option>
                                                                    <option value=5>Punjab</option>
                                                                </select>
                                                                <br>
                                                                <label>City<span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="First name" name="city" v-model="posts.city" required>
                                                                <br>
                                                                <label>PostCode <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="Last name" name="postcode" v-model="posts.postcode" required>
                                                                <br>
                                                                <div class="form-floating">
                                                                    <label>Address</label>
                                                                    <textarea class="form-control" rows="0" placeholder="Address"  style="height: 100px" v-model="posts.addresss" required></textarea>
                                                                </div>
                                                            <!-- </form> -->
                                                        </div>
                                                    </div>   
                                                    <br><br>
                                                    <div class="container">
                                                        <br>
                                                        <div class="col-md-4 col-md-offset-2 d-flex justify-content-center mx-auto">
                                                            <div class="input-group">
                                                                <input type="submit" class="btn btn-danger btn-lg px-5" value="Update">
                                                                &nbsp;
                                                                <button type="button" class="offset-md-1 btn btn-secondary btn-lg px-5 ">  <a href="/" class="text-light">Close</a> </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form> 
                                            </div>
                                            <br>
                                            <!----payment table--->
                                            <div class="box-body border-top">
                                                <br>  
                                                <div class="col-md-12">
                                                <h4 class="box-title text-info p-3">Opening Balance Information: </h4><table class="table table-hover table-bordered" style="width:100%" id="payments_table">
                                                    <thead>
                                                        <tr class="bg-gray ">
                                                        <th>#</th>
                                                        <th>Payment Date</th>
                                                        <th>Payment</th>
                                                        <th>Payment Type</th>
                                                        <th>Payment Note</th>
                                                        <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td colspan="6" class="text-center text-bold">No Previous Stock Entry Found!!</td></tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                            </div>
                                            <!--Start Calculation -->
                                            
                                            <!-- /.content-wrapper -->
                                        <Footer/>
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
    name:'UpdateCustomers',
    components: {
    Navbar,
    Sidebar,
    Footer
    },
    data(){
        return{
            // test:"Greepeer",
            posts:{
                addresss:"",
                state:"",
                country:"",
                customer:"",
                email:"",
                mobile:"",
                phone:"",
                gst:"",
                tax:"",
                balance:"",
                city:"",
                state_id:"",
                country_id:"",
                postcode:"",
                id:""
            },
        }
    },
    mounted()
    {
        this.id=this.$route.params.id;
        this.editData();
        // console.log(this.$route.params.id);
    },
    methods:{

        editData(){
            const UpApi ='http://192.168.100.9/Project_Laravel/public/api/customer/'+this.id;
            axios.get(UpApi)
            // return promise
            .then((res)=>{
                this.custdata=res.data;
                // console.log(res.data);
                // console.log(res.data[0].city)
                this.posts.addresss = res.data[0].address
                this.posts.city = res.data[0].city
                this.posts.state_id = res.data[0].state_id
                this.posts.country_id = res.data[0].country_id
                this.posts.state = res.data[0].state_id
                this.posts.country = res.data[0].country_id
                this.posts.customer = res.data[0].customer_name
                this.posts.phone = res.data[0].phone
                this.posts.mobile = res.data[0].mobile
                this.posts.email = res.data[0].email
                this.posts.gst = res.data[0].gst_number
                this.posts.tax = res.data[0].tax_number
                this.posts.balance = res.data[0].opening_balance
                this.posts.postcode = res.data[0].postcode
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
        },

        PostData(e){
            confirm('Do You Wants to Save Record ?')    
            const UpApi ='http://192.168.100.9/Project_Laravel/public/api/customer/'+this.id;
            axios.put(UpApi,{
                address:this.posts.addresss,
                city:this.posts.city,
                state_id:this.posts.state,
                country_id:this.posts.country,
                customer_name:this.posts.customer,
                phone:this.posts.phone,
                mobile:this.posts.mobile,
                email:this.posts.email,
                gst_number:this.posts.gst,
                tax_number:this.posts.tax,
                balance:this.posts.balance,
                postcode:this.posts.postcode,
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

        Redirect(){
            setTimeout("window.location='/Customers'",3000);
            }

    }

    }
</script>