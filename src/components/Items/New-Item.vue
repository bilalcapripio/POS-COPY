<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="wrapper p-2">
                            <div class="content-wrapper">
                                <div class="content-header">
                                        <!---Start Third card shop-->
                                        <h2 class="text-md ml-4"><span class="text-lg">Items</span>  Add / <small class="text-gray text-sm"><span>Update Items</span></small></h2>
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
                                            <hr style="height:2px;border-width:0;color:dodgerblue;background-color:dodgerblue">
                                            <div class="box-body">
                                                <form action="" @submit="postData" method="post" enctype="multipart/form-data">

                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="item_name">Item Name<span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control" id="item_name" name="item_name" placeholder="Item Name" v-model="posts.itemName">
                                                    <span id="item_name_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label>Brand</label>
                                                    <select class="form-control select2 select2-hidden-accessible" id="brand_id" name="brand_id" style="width: 100%;" v-model="posts.brand">
                                                        <option value="">Select</option>
                                                        <option :value="data.id" v-for="data in itemBrandData" v-bind:key="data.id">
                                                            {{data.brand_name}}
                                                        </option>
                                                    </select>
                                                    <br>
                                                    
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="category_id">Category <span class="text-danger">*</span></label>
                                                    <select class="form-control select2 select2-hidden-accessible" v-model="posts.category" id="category_id" name="category_id" style="width: 100%;" value="" tabindex="-1" aria-hidden="true">
                                                        <option value="">-Select-</option>
                                                        <option :value="data.id" v-for="data in itemCategoryData" v-bind:key="data.id">
                                                            {{data.category_name}}
                                                        </option>
                                                    </select>
                                                    <br>
                                                    
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="unit_id" class="control-label">Unit<span class="text-danger">*</span></label>
                                                    <select class="form-control select2 select2-hidden-accessible" v-model="posts.unit" id="unit_id" name="unit_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                        <option value="">-Select-</option>
                                                        <option :value="data.id" v-for="data in unitData" v-bind:key="data.id">
                                                            {{data.unit_name}}
                                                        </option>
                                                    </select>
                                                        <br>
                                                        
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="sku">SKU</label>
                                                    <input type="text" class="form-control" id="sku" name="sku" placeholder="SKU" v-model="posts.sku" >
                                                    <span id="sku_msg" style="display:none" class="text-danger"></span>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="hsn">HSN</label>
                                                    <input type="text" class="form-control" id="hsn" name="hsn" placeholder="" v-model="posts.hsn">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="alert_qty">Alert Quantity</label>
                                                    <input type="number" class="form-control no_special_char" id="alert_qty" name="alert_qty" placeholder="Alert Quantity" min="0" v-model="posts.alertQuantity">
                                                    <span  style="display:none" class="text-danger"></span>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="lot_number">Lot Number</label>
                                                    <input type="text" class="form-control"  placeholder="Lot Number" v-model="posts.lotNumber">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <div class="form-group">
                                                    <label>Expire</label>
                                                    <input type="date"  min="1000-01-01"  max="3000-12-31" class="form-control" v-model="posts.expire">
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="custom_barcode">Barcode</label>
                                                    <input type="text" class="form-control" id="custom_barcode" name="custom_barcode" placeholder="BarCode" v-model="posts.barCode" >
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="custom_barcode">Description</label>
                                                    <textarea type="text" class="form-control" id="description" name="description" placeholder="Description" v-model="posts.description"></textarea>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="item_image">Select Image</label>
                                                    <input type="file" name="item_image" id="item_image" ref="image">
                                                    <span  style="display:block;" class="text-danger">Max Width/Height: 1000px * 1000px &amp; Size: 1MB </span>
                                                </div>
                                                </div>
                                                <hr>
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="price">Price<span class="text-danger">*</span></label>
                                                    <input type="number" class="form-control" id="price" name="price" placeholder="Price of Item without Tax" v-model="posts.price">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="tax_id">Tax<span class="text-danger">*</span></label>
                                                    <select class="form-control" id="tax_id" name="tax_id" style="width: 100%;" tabindex="-1" aria-hidden="true" v-model="posts.tax">
                                                        <option value="">-Select-</option>
                                                        <option :value="data.tax" v-for="data in taxData" v-bind:key="data.id">
                                                            {{data.tax_name}}({{data.tax}}%)
                                                        </option>
                                                    </select>
                                                    <br>
                                                    
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="purchase_price">Purchase Price<span class="text-danger">*</span></label>
                                                    <input type="number" class="form-control" id="purchase_price" name="purchase_price" :value="calcuPurchasePrice()" disabled>
                                                </div>
                                                </div>
                                                <!-- /row -->
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="tax_type">Tax Type<span class="text-danger">*</span></label>
                                                    <select class="form-control" id="tax_type" name="tax_type" style="width: 100%;" v-model="posts.taxType">
                                                        <option value="">-Select-</option>
                                                        <option value="exclusive">Exclusive</option>
                                                        <option value="inclusive">Inclusive</option>
                                                    </select>
                                                    <br>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="profit_margin">Profit Margin(%) 
                                                        <i class="hover-q " data-container="body" data-toggle="popover" data-placement="top" data-content="Based on Purchase Price" data-html="true" data-trigger="hover" data-original-title="">
                                                    <i class="fa fa-info-circle text-maroon text-black hover-q"></i>
                                                    </i></label>
                                                    <input type="text" class="form-control" placeholder="Profit in %" v-model="posts.profitMargin">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="sales_price" class="control-label">Sales Price<span class="text-danger">*</span></label>
                                                    <input type="number" step=any class="form-control" placeholder="Sales Price" :value="calcuSalesPrice()">
                                                </div>
                                                </div>
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="final_price" class="control-label">Final Price<span class="text-danger">*</span></label>
                                                    <input type="number" disabled class="form-control" placeholder="Final Price" :value="calcufinalPrice()">
                                                </div>
                                                </div>
                                                <!-- /row -->
                                                <hr>
                                                <div class="row">
                                                <div class="form-group col-md-4">
                                                    <label for="current_opening_stock">Current Opening Stock</label>
                                                    <input type="text" class="form-control only_currency" id="current_opening_stock" name="current_opening_stock" placeholder="" readonly="" value="0">
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label for="new_opening_stock">New Opening Stock</label>
                                                    <input type="text" class="form-control" v-model="posts.availableQuantity" id="new_opening_stock" name="new_opening_stock" placeholder="-/+">
                                                </div>
                                                </div>
                                                <button class="btn btn-success" @click="Redirects()">Save</button>
                                                &nbsp;
                                                <button class="btn btn-warning">Close</button>
                                                <!-- /row -->
                                                </form>
                                        </div>
                                        </div>
                                        <!----End From ---->
                                    <br>
                                        <!---Start table---->
                                        <div class="col-md-12 bg-light border-top border-primary">
                                            <div class="box">
                                            <div class="box-header p-3">
                                                <h5 class="box-title text-blue">Opening Stock Adjustment Records</h5>
                                            </div>
                                            <!-- /.box-header -->
                                            <div class="box-body table-responsive no-padding">
                                                
                                                <table class="table table-bordered table-hover " id="report-data">
                                                <thead>
                                                <tr class="bg-gray">
                                                    <th style="">#</th>
                                                    <th style="">Entry Date</th>
                                                    <th style="">Stock</th>
                                                    <th style="">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td colspan="4" class="text-center text-bold">No Previous Stock Entry Found!!</td></tr>                           </tbody>
                                                </table>
                                                
                                                
                                            </div>
                                            <!-- /.box-body -->
                                            </div>
                                            <!-- /.box -->
                                        </div>
                                        <!----End Table----->
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
    name:'',
    data(){
        return{
            unitData:[],
            itemBrandData:[],
            itemCategoryData:[],
            taxData:[],
            image:'',
            posts:{
                itemName:'',
                brand:'',
                category:'',
                unit:'',
                sku:'',
                hsn:'',
                alertQuantity:'',
                lotNumber:'',
                expire:'',
                barCode:'',
                description:'',
                price:'',
                tax:'',
                taxId:'',
                purchasePrice:'',
                taxType:'',
                profitMargin:'',
                salesPrice:'',
                finalPrice:'',
                availableQuantity:''
            }
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },

    mounted(){
        this.getUnitData()
        this.getitemBrandData()
        this.getitemCategoryData()
        this.getTaxData()
    },
    methods:{
            calcuPurchasePrice: function(){
                var total ='';
                if (this.posts.taxType == 'exclusive') {
                    var taxval = this.posts.tax == '' ? 0 : this.posts.tax 
                    var cal = parseFloat(this.posts.price) * (parseFloat(taxval) / 100)
                    total = parseFloat(cal)+parseFloat(this.posts.price)
                    this.posts.purchasePrice = parseFloat(total)
                }else{
                    total = parseFloat(this.posts.price)
                    this.posts.purchasePrice = parseFloat(total)
                }
                return total
            },

            calcuSalesPrice: function(){
               var promarval = this.posts.profitMargin == '' ? 0 : this.posts.profitMargin 
               var cal = this.calcuPurchasePrice() * (parseFloat(promarval) / 100)
               var total = parseFloat(cal) + this.calcuPurchasePrice()
               this.posts.salesPrice = parseFloat(total)
               return parseFloat(total)
            },
            calcufinalPrice: function(){
                var total =''
                var taxval = this.posts.tax == '' ? 0 : this.posts.tax
                if (this.posts.taxType == 'exclusive') {
                    var cal = this.calcuSalesPrice() * (parseFloat(taxval) / 100)
                    total = parseFloat(cal) + this.calcuSalesPrice()
                    this.posts.finalPrice = parseFloat(total)
                }else{
                    total = this.calcuSalesPrice()
                    this.posts.finalPrice = parseFloat(total)
                }
                return parseFloat(total)
            },
            postData: function (e){
                confirm('Do You Wants to Save Record ?')
                const formdata = new FormData();
                var files = this.$refs.image.files;
                formdata.append('item_name',this.posts.itemName),
                formdata.append('brand_id',this.posts.brand),
                formdata.append('category_id',this.posts.category),
                formdata.append('unit_id',this.posts.unit),
                formdata.append('sku',this.posts.sku),
                formdata.append('hsn',this.posts.hsn),
                formdata.append('alert_quantity',this.posts.alertQuantity),
                formdata.append('lot_number',this.posts.lotNumber),
                formdata.append('expire_date',this.posts.expire),
                formdata.append('barcode',this.posts.barCode),
                formdata.append('item_name',this.posts.itemName),
                formdata.append('description',this.posts.description),
                formdata.append('tax_id',this.posts.tax),
                formdata.append('purchase_price',this.posts.purchasePrice),
                formdata.append('tax_type',this.posts.taxType),
                formdata.append('sales_price',this.posts.finalPrice),
                formdata.append('available_quantity',this.posts.availableQuantity);
                formdata.append('image',files[0]);

                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                axios.post("http://192.168.100.9/Project_Laravel/public/api/item",formdata,config)
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
            getUnitData: function(){
                axios.get("http://192.168.100.9/Project_Laravel/public/api/unit")
                // return promise
                .then((res)=>{
                    this.unitData=res.data;
                    console.log(res.data);
                })
                // catch error
                .catch(error =>{
                    console.log(error)
                });
            },
            getitemBrandData: function(){
                axios.get("http://192.168.100.9/Project_Laravel/public/api/item_brand")
                // return promise
                .then((res)=>{
                    this.itemBrandData=res.data;
                    console.log(res.data);
                })
                // catch error
                .catch(error =>{
                    console.log(error)
                });
            },
            getitemCategoryData: function(){
                axios.get("http://192.168.100.9/Project_Laravel/public/api/item_category")
                // return promise
                .then((res)=>{
                    this.itemCategoryData=res.data;
                    console.log(res.data);
                })
                // catch error
                .catch(error =>{
                    console.log(error)
                });
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
            getTaxSpecificData: function(){
            // this.posts.taxId = id;
                axios.get("http://192.168.100.9/Project_Laravel/public/api/tax/"+ this.posts.tax)
                // return promise
                .then((res)=>{
                    console.log(res.data);
                })
                // catch error
                .catch(error =>{
                    console.log(error)
                });
            },
            Redirects(){
            setTimeout("window.location='/items'",3000);
            }
    }

}
</script>

<style lang="stylus">

</style>