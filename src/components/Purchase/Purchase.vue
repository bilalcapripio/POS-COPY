<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                    <div class="content-wrapper p-2">
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

                                <!---------------- Start Table  --------------->

                                    <!--Start Calculation -->
                                    <div class="container border-top">
                                        <br>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <form>
                                                    <label>Customer Name <span class="text-danger">*</span></label>
                                                    <select id="inputState" class="form-control">
                                                        <option selected>Choose...</option>
                                                        <option>Walk-In Customer</option>
                                                        <option>Walk-In Customer</option>
                                                        <option>Walk-In Customer</option>
                                                        <option>Walk-In Customer</option>
                                                        <option>Walk-In Customer</option>
                                                    </select>                                
                                                    <br>
                                                    <label>Sales Date <span class="text-danger">*</span></label>
                                                    <select id="inputState" class="form-control">
                                                        <option selected>Choose...</option>
                                                        <option>Walk-In Customer</option>
                                                        <option>Walk-In Customer</option>
                                                        <option>Walk-In Customer</option>
                                                        <option>Walk-In Customer</option>
                                                        <option>Walk-In Customer</option>
                                                    </select>       
                                                </form>
                                            </div>
                                            <div class="col-md-6">
                                                <form>
                                                    <label>Customer Name <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" placeholder="First name">
                                                    <br>
                                                    <label>Customer Name <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" placeholder="Last name">
                                                </form>
                                            </div>
                                        </div>    
                                    </div>
                                    <!--Start Calculation -->
                                    <br><br>
                                    <!-- Start Barcode -->
                                    <div class="container border-top">
                                        <br><br>
                                        <div class="col-md-8 col-md-offset-2 d-flex justify-content mx-auto">
                                            <div class="input-group">
                                                <span class="bg-lightblue py-1 text-center"><i class="fa fa-barcode px-3 text-center mt-2"></i> </span>
                                                <input type="text" class="form-control py-3" placeholder="Item name/Barcode/Itemcode" v-model="query" id="item_search">
                                            </div>
                                        </div>
                                        <ul class="bg-light list-unstyled">
                                            <li v-for="(data,index) in searchItems"  v-bind:key="data.id" class="px-5 py-2 lead border text-success">
                                                <p @click="uploadItem(index)"> {{data.item_name}} </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- End Barcode -->
                                    <br><br>
                                    <!------Start table----->
                                    <div class="box-body">
                                        <div class="table-responsive" style="width: 100%">
                                            <table class="table table-hover table-bordered" style="width:100%; font-size:15px" id="sales_table">
                                                <thead class="custom_thead ">
                                                    <tr class="bg-primary">
                                                        <th rowspan="2" style="width:15%">Item Name</th>
                                                        <th rowspan="2" style="width:15%;">Quantity</th>
                                                        <th rowspan="2" style="width:10%">Purchase Price</th> 
                                                        <th rowspan="2" style="width:10%">Tax%</th>
                                                        <th rowspan="2" style="width:10%">Tax Amount</th>
                                                        <th rowspan="2" style="width:10%">Discount(%)</th>
                                                        <th rowspan="2" style="width:8%">Unit Cost</th>
                                                        <th rowspan="2" style="width:8%">Total Amount</th>
                                                        <th rowspan="2" style="width:7.5%">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(data,index) in uploadItems" v-bind:key="data.id">
                                                        <td>
                                                            <input type="text" :value="data.item_name" disabled  class="form-control no-padding text-center" style="padding:17px; background-color:white; color:blue">
                                                        </td>
                                                        <td>
                                                            <!-- {{data.qty}} -->
                                                               <div class="input-group input-group-sm">
                                                                <span class="input-group-btn">
                                                                    <button type="button" class="btn btn-default btn-flat" @click="decrease(index)">
                                                                        <i class="fa fa-minus text-danger"></i>
                                                                    </button>
                                                                </span>
                                                                <!-- start count result -->
                                                                <!-- <input type="" class="form-control"> -->
                                                                <input type="text" :value="data.qty" class="form-control no-padding text-center" style="padding:17px">
                                                                <!--end count result -->
                                                                <span class="input-group-btn">
                                                                    <button type="button" class="btn btn-default btn-flat" @click="increase(index)">
                                                                        <i class="fa fa-plus text-success"></i>
                                                                    </button>
                                                                </span>
                                                            </div>

                                                        </td>
                                                        <td>
                                                             <input type="text" :value="data.purchase_price" disabled  class="form-control no-padding text-center" style="padding:17px; background-color:white;">
                                                        </td>
                                                        <td>
                                                            <input type="text" :value="'Tax '+data.tax+'%'" disabled  class="form-control no-padding text-center" style="padding:17px;background-color:white; color:blue">
                                                        </td>
                                                        <td>
                                                            <input type="text" :value="data.tax_amount" disabled  class="form-control no-padding text-center" style="padding:17px;">
                                                        </td>
                                                        <td>
                                                            <input type="text" v-model="uploadItems[index].discount" @input="getDiscount(index)" class="form-control no-padding text-center" style="padding:17px">
                                                        </td>
                                                        <td><input type="text" :value="data.unit_cost" disabled  class="form-control no-padding text-center" style="padding:17px;"></td>
                                                        <td><input type="text" :value="data.total_amount" disabled  class="form-control no-padding text-center" style="padding:17px;"></td>
                                                        <td>
                                                            <a href="#" @click="removeRow(index)" class="fa fa-fw fa-minus-square text-red" style="cursor: pointer;font-size: 34px;"></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <hr>
                                    <!-- start table record -->
                                    <div class="row">
                                        <div class="col-md-7 p-5">
                                            <form>
                                                <div class="d-flex justify-content-between mx-auto">
                                                    <h1 class="display-3">Quantity <span class="text-success font-weight-bold">0</span></h1>
                                                </div>
                                                <br>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Other Charges</label>
                                                        <input type="email" class="form-control" id="inputEmail4">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Select</label>
                                                            <select id="inputState" class="form-control">
                                                            <option selected>None</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Discount on All</label>
                                                        <input type="email" class="form-control" id="inputEmail4">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Select</label>
                                                            <select id="inputState" class="form-control">
                                                            <option selected>Per%</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                            </select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Note</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-md-5 mt-5 p-5 " >
                                            <!-- table total -->
                                            <div class="record" style="line-height: 3;">
                                                <table class="col-md-6 ml-5">
                                                    <tbody><tr>
                                                    <th class="text-right" style="font-size: 20px;">Subtotal</th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 20px;">
                                                        <h4><b id="subtotal_amt" name="subtotal_amt">0.00</b></h4>
                                                    </th>
                                                    </tr>
                                                    <tr>
                                                    <th class="text-right" style="font-size: 20px;">Other Charges</th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 20px;">
                                                        <h4><b id="other_charges_amt" name="other_charges_amt">0.00</b></h4>
                                                    </th>
                                                    </tr>
                                                    <tr>
                                                    <th class="text-right" style="font-size: 20px;">Discount on All</th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 20px;">
                                                        <h4><b id="discount_to_all_amt" name="discount_to_all_amt">0.00</b></h4>
                                                    </th>
                                                    </tr>
                                                    <tr style="display: none;">
                                                    <th class="text-right" style="font-size: 20px;">Round Off                                                <i class="hover-q " data-container="body" data-toggle="popover" data-placement="top" data-content="Go to Site Settings-> Site -> Disable the Round Off(Checkbox)." data-html="true" data-trigger="hover" data-original-title="Do you wants to Disable Round Off ?" title="">
                                                            <i class="fa fa-info-circle text-maroon text-black hover-q"></i>
                                                        </i>
                                                        
                                                    </th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 20px;">
                                                        <h4><b id="round_off_amt" name="tot_round_off_amt">0.00</b></h4>
                                                    </th>
                                                    </tr>
                                                    <tr>
                                                    <th class="text-right" style="font-size: 20px;">Grand Total</th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 17px;">
                                                        <h4><b id="total_amt" name="total_amt">0.00</b></h4>
                                                    </th>
                                                    </tr>
                                                </tbody></table>
                                            </div>

                                            <!-- table total -->
                                        </div>
                                    </div>

                                    <!-- start table record -->

                                    <!------End table----->
                                    <br>
                                    <!----payment table--->
                                    <div class="box-body ">
                                        <div class="col-md-12">
                                        <h4 class="box-title text-info">Previous Payments Information : </h4><table class="table table-hover table-bordered" style="width:100%" id="payments_table">
                                            <thead>
                                                <tr class="bg-gray ">
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>Payment Type</th>
                                                <th>Payment Note</th>
                                                <th>Payment</th>
                                                <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td colspan="6" class="text-center text-bold">Payments Pending!!</td></tr>                                             </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    <br>
                                    <br>
                                    <div class="col-md-12 payments_div payments_div_">
                                        <h4 class="box-title text-info">Subtotal :</h4>
                                        <div class="box box-solid bg-gray p-3">        
                                        <div class="box-body">
                                            <div class="row">
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="amount">Amount</label>
                                                    <input type="text" class="form-control text-right paid_amt only_currency" id="amount" name="amount" placeholder="">
                                                        <span id="amount_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="">
                                                <label for="payment_type">Payment Type</label>
                                                <select class="form-control select2 select2-hidden-accessible" id="payment_type" name="payment_type" tabindex="-1" aria-hidden="true">
                                                    <option value="">-Select-</option><option value="Cash">Cash</option><option value="Card">Card</option><option value="Paytm">Paytm</option><option value="Finance">Finance</option>    
                                                </select>
                                                <span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" style="width: 522px;"></span><span class="selection"></span>
                                            </div>
                                            </div>
                                        <div class="clearfix"></div>
                                    </div>  
                                    <div class="row">
                                            <div class="col-md-12">
                                                <div class="">
                                                    <label for="payment_note">Payment Note</label>
                                                    <textarea type="text" class="form-control" id="payment_note" name="payment_note" placeholder=""></textarea>
                                                    <span id="payment_note_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                            </div>      
                                        <div class="clearfix"></div>
                                    </div>   
                                    </div>
                                    </div>     
                                    <br>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Send SMS to Custome <i class="fa fa-info-circle text-maroon text-black hover-q"></i></label>
                                    </div>
                                    </div>
                                    <hr>
                                    <br>
                                    <div class=" d-flex mx-auto justify-content-center align-items-center ">
                                        <button type="button" class="btn btn-danger btn-lg w-25 ">Save</button>
                                        &nbsp;
                                        <button type="button" class="btn btn-secondary btn-lg w-25">Close</button>

                                    </div>
                                    <!----payment table--->
                                    
                                    <!------------------ End Table ---------------------->
                                    
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
// import { debounce } from "lodash"
import axios from 'axios'
// import ItemSalesReportVue from '../Report/Item-Sales-Report.vue'

export default {
    name:'',
    data(){
        return{
            uploadItems:[],
            searchItems:[],
            query:'',
            discount:''
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    updated(){
        if (this.query != '') {
            this.search();            
        } 
        if (this.query == '') {
            this.searchItems=''
        }
    },
    methods:{
        increase: function(index){
            this.uploadItems[index].qty++
        },
        decrease: function(index){
            if (this.uploadItems[index].qty > 1) {
                this.uploadItems[index].qty--
            }
        },
        getDiscount:function(index){
            var unit_cost = this.uploadItems[index].purchase_price + this.uploadItems[index].tax_amount 
            var test =  Math.ceil(unit_cost * (this.uploadItems[index].discount / 100))
            this.uploadItems[index].total_amount = unit_cost-test
            console.log(this.uploadItems[index].total_amount);
        },
        removeRow: function(index){
            this.uploadItems.splice(index,1)
        },  
        search: function() {
            const api ='http://192.168.100.9/Project_Laravel/public/api/item/search/'+this.query; 
            axios.get(api)
            .then((res)=>{
                this.searchItems = res.data
            })
        },
        uploadItem: function(index){
            const items = this.searchItems[index];
            let tax_amount = Math.ceil(items.purchase_price * (items.tax_id / 100));
            let unit_cost = tax_amount + items.purchase_price;
            var selected_items = {
                'item_name':items.item_name,
                'qty':1,
                'purchase_price':items.purchase_price,
                'tax':items.tax_id,
                'tax_amount': tax_amount,
                "discount":'',
                'unit_cost': unit_cost,
                'total_amount': unit_cost,
            }
            this.uploadItems.push(selected_items)
            this.query = ''
            console.log(selected_items); 
        },
    }

}
</script>

<style lang="stylus">

</style>