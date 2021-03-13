<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                    <div class="content-wrapper p-2">
                        <div class="content-header ">
                       
                            <div class="container-fluid">
                                <form @submit.prevent="postData">

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
                                                
                                                    <label>Supplier Name <span class="text-danger">*</span></label>
                                                    <select id="inputState" v-model="posts.supplier" class="form-control">
                                                        <option selected>Choose...</option>
                                                        <option :value="data.id" v-for="data in supplierData" v-bind:key="data.id">
                                                            {{data.supplier_name}}
                                                        </option>
                                                    </select>                                
                                                    <br>
                                                    <label>Status <span class="text-danger">*</span></label>
                                                    <select id="inputState" v-model="posts.status" class="form-control">
                                                        <option selected>Choose...</option>
                                                        <option value="recieved">Recieved</option>
                                                        <option value="pending">Pending</option>
                                                        <option value="ordered">Ordered</option>
                                                    </select>       
                                            
                                            </div>
                                            <div class="col-md-6">
                                             
                                                    <label>Purchase Date <span class="text-danger">*</span></label>
                                                    <input type="date" v-model="posts.purchase_date" class="form-control" placeholder="First name">
                                                    <br>
                                                    <label>Reference No <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" v-model="posts.reference_no" placeholder="Last name">
                                             
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
                                                <input type="text" class="form-control py-3" placeholder="Item name/Barcode/Itemcode" v-model="query" id="item_search" autocomplete="off">
                                                </div>
                                               
                                        </div>
                                                <ul>
                                                    <li v-for="(data,index) in searchItems"  v-bind:key="data.id">
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
                                                        <th rowspan="2" style="width:10%">Unit Cost</th>
                                                        <th rowspan="2" style="width:10%">Total Amount</th>
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
                                                                <!-- <span class="input-group-btn">
                                                                    <button type="button" class="btn btn-default btn-flat" @click="decrease(index)">
                                                                        <i class="fa fa-minus text-danger"></i>
                                                                    </button>
                                                                </span> -->
                                                                <!-- start count result -->
                                                                <!-- <input type="" class="form-control"> -->
                                                                <input type="number" min="1" v-model="uploadItems[index].qty" @input="getQuantity(index)"  class="form-control no-padding text-center" style="padding:17.5px">
                                                                <!--end count result -->
                                                                <!-- <span class="input-group-btn">
                                                                    <button type="button" class="btn btn-default btn-flat" @click="increase(index)">
                                                                        <i class="fa fa-plus text-success"></i>
                                                                    </button>
                                                                </span> -->
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
                                                            <input type="number" v-model="uploadItems[index].discount" @input="getDiscount(index)" class="form-control no-padding text-center" style="padding:17px">
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
                                          
                                                <div class="d-flex justify-content-between mx-auto">
                                                    <h1 class="display-3">Quantity <span class="text-success font-weight-bold">{{totat_quantity()}}</span></h1>
                                                </div>
                                                <br>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Other Charges</label>
                                                        <input type="text" v-model="other_charges" class="text-right form-control" id="inputEmail4">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Select</label>
                                                            <select id="inputState" class="form-control" v-model="other_charges_tax">
                                                                <option selected value="">None</option>
                                                                <option v-for="data in taxData" v-bind:key="data.id" :value="data.tax">
                                                                    {{data.tax_name}} {{data.tax}}%
                                                                </option>
                                                            </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Discount on All</label>
                                                        <input type="text" v-model="discount_on_all" class="text-right form-control" id="inputEmail4">
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputState">Select</label>
                                                            <select id="inputState" v-model="select_discount_type" class="form-control">
                                                                <option value="">Fixed</option>
                                                                <option value="percent">Per%</option>
                                                            </select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Note</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                            
                                        </div>
                                        <div class="col-md-5 mt-5 p-5 " >
                                            <!-- table total -->
                                            <div class="record" style="line-height: 3;">
                                                <table class="col-md-6 ml-5">
                                                    <tbody><tr>
                                                    <th class="text-right" style="font-size: 20px;">Subtotal:</th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 20px;">
                                                        <h4><b id="subtotal_amt" name="subtotal_amt">{{subtotal()}}</b></h4>
                                                    </th>
                                                    </tr>
                                                    <tr>
                                                    <th class="text-right" style="font-size: 20px;">Other Charges:</th>
                                                    <th class="text-right" style="padding-left:5%;font-size: 15px;">
                                                        <h4><b id="other_charges_amt" name="other_charges_amt">{{other_charges_func()}}</b></h4>
                                                    </th>
                                                    </tr>
                                                    <tr>
                                                    <th class="text-right" style="font-size: 20px;">Discount on All:</th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 20px;">
                                                        <h4><b id="discount_to_all_amt" name="discount_to_all_amt">{{discount_to_all()}}</b></h4>
                                                    </th>
                                                    </tr>
                                                    <tr style="display: none;">
                                                    <th class="text-right" style="font-size: 20px;">Round Off:                                                <i class="hover-q " data-container="body" data-toggle="popover" data-placement="top" data-content="Go to Site Settings-> Site -> Disable the Round Off(Checkbox)." data-html="true" data-trigger="hover" data-original-title="Do you wants to Disable Round Off ?" title="">
                                                            <i class="fa fa-info-circle text-maroon text-black hover-q"></i>
                                                        </i>
                                                        
                                                    </th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 20px;">
                                                        <h4><b id="round_off_amt" name="tot_round_off_amt">0.00</b></h4>
                                                    </th>
                                                    </tr>
                                                    <tr>
                                                    <th class="text-right" style="font-size: 20px;">Grand Total:</th>
                                                    <th class="text-right" style="padding-left:10%;font-size: 17px;">
                                                        <h4><b id="total_amt" name="total_amt">{{grand_total()}}</b></h4>
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
                                                    <input type="text" v-model="posts.amount" class="form-control text-right paid_amt only_currency" id="amount" name="amount" placeholder="">
                                                        <span id="amount_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="">
                                                <label for="payment_type">Payment Type</label>
                                                <select class="form-control select2 select2-hidden-accessible" v-model="posts.payment_type" id="payment_type" name="payment_type" tabindex="-1" aria-hidden="true">
                                                    <option value="">-Select-</option>
                                                    <option value="Cash">Cash</option>
                                                    <option value="Card">Card</option>
                                                    <option value="Paytm">Paytm</option>
                                                    <option value="Finance">Finance</option>    
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
                                                    <textarea type="text" v-model="posts.payment_note" class="form-control" id="payment_note" name="payment_note" placeholder=""></textarea>
                                                    <span id="payment_note_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                            </div>      
                                        <div class="clearfix"></div>
                                    </div>   
                                    </div>
                                    </div>     
                                    <br>
                               
                                    </div>
                                    <hr>
                                    <br>
                                    <div class=" d-flex mx-auto justify-content-center align-items-center ">
                                        <button type="submit" class="btn btn-danger btn-lg w-25 ">Save</button>
                                        &nbsp;
                                        <button type="submit" class="btn btn-secondary btn-lg w-25">Close</button>

                                    </div>
                                   
                                    </form>
                                     <br><br>
                                    <!-- </div> -->
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
            posts:{
                supplier:'',
                status:'',
                purchase_date:'',
                reference_no:'',
                amount:'',
                payment_type:'',
                payment_note:'',
            },
            supplierData:[],
            uploadItems:[],
            searchItems:[],
            taxData:[],
            query:'',
            discount:'',
            total:'',
            other_charges_tax:'',
            grand_total_amount:'',
            other_charges:'',
            discount_on_all:'',
            select_discount_type:''
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
    mounted(){
        this.getTaxData()
        this.getSupplierData()
    },
    methods:{
        getSupplierData: function(){
            axios.get("http://192.168.100.9/Project_Laravel/public/api/supplier")
                // return promise
            .then((res)=>{
                this.supplierData=res.data;
                    console.log(res.data);
                })
                // catch error
            .catch(error =>{
                console.log(error)
            });
        },
        postData: function(e)
        {
            confirm('Do You Wants to Save Record ?')
            axios({
                method: 'post',
                url: 'http://192.168.100.9/Project_Laravel/public/api/purchase',
                data: {
                    supplier:this.posts.supplier,
                    status:this.posts.status,
                    purchase_date:this.posts.purchase_date,
                    reference_no:this.posts.reference_no,
                    paid_payment:this.posts.amount,
                    total:this.grand_total_amount,
                    payment_status:this.posts.payment_type,
                    payment_note:this.posts.payment_note,
                    created_by:'admin',
                    items_array: this.uploadItems,
                }
            })
            .then((res)=>{
                console.log(res);
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
            // show data [testing]
            console.table(this.posts);
            console.log(this.uploadItems);

            // submit data without page reload 
            e.preventDefault();
        },

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

        increase: function(index){
            this.uploadItems[index].qty++
            this.uploadItems[index].tax_amount = this.uploadItems[index].tax_amount * this.uploadItems[index].qty;
            this.uploadItems[index].total_amount = this.uploadItems[index].total_amount * this.uploadItems[index].qty;
        },

        decrease: function(index){
            if (this.uploadItems[index].qty > 1) {
                this.uploadItems[index].qty--
            }
        },

        subtotal: function(){
            var sum = 0.00;
            this.uploadItems.forEach(value=>{
                sum += value.total_amount
            })
              
            return sum
        },

        totat_quantity: function(){
            var sum = 0;
            this.uploadItems.forEach(value=>{
                sum += parseFloat(value.qty)
            })
            return sum
        },

        discount_to_all: function (){
            var sum = 0.00
            if (this.uploadItems != '') {
                if (this.select_discount_type == 'percent' && this.discount_on_all != '') {
                    // if (this.other_charges_func() != 0) {
                        sum+= this.subtotal()+this.other_charges_func() * (parseFloat(this.discount_on_all) / 100)
                    // }else{
                        // sum+= this.subtotal() * (this.discount_on_all / 100)
                    // }
                }else if(this.discount_on_all != '' && this.select_discount_type != 'percent'){
                    sum+= parseFloat(this.discount_on_all)
                }
                return sum          
            }
        },

        other_charges_func: function (){
            var sum = 0.00
            if (this.uploadItems != '') {
                if (this.other_charges_tax != '' && this.other_charges != '') {
                    var tax = parseFloat(this.other_charges * (this.other_charges_tax / 100))
                    sum +=  parseFloat(this.other_charges)+parseFloat(tax)
                }else if(this.other_charges != ''){
                    sum += parseFloat(this.other_charges)
                }
            }
            return sum;
        },

        grand_total: function(){
            var sum = 0.00
            var plus = this.subtotal()+this.other_charges_func()
            var minus = plus-this.discount_to_all()
            sum += minus
            this.grand_total_amount = sum
            return sum
        },

        getQuantity: function(index){
            if (this.uploadItems[index].qty > 0) {
                var tax_amount = Math.ceil(this.uploadItems[index].purchase_price * (this.uploadItems[index].tax / 100));
                var total_amount = this.uploadItems[index].qty * this.uploadItems[index].unit_cost 
                this.uploadItems[index].tax_amount = this.uploadItems[index].qty * tax_amount
                this.uploadItems[index].total_amount = total_amount 
            }
        },

        getDiscount:function(index){
            var unit_cost = this.uploadItems[index].purchase_price * this.uploadItems[index].qty + this.uploadItems[index].tax_amount 
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
                'item_id':items.id,
                'qty':1,
                'purchase_price':items.purchase_price,
                'tax':items.tax_id,
                'tax_amount': tax_amount,
                'discount':'',
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