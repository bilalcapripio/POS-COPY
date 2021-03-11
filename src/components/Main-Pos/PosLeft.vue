h<template>
        <div>
            <div class="">
                <div class="col-md-12">
                    <div class="container-fluid pt-2">
                        <div class="card border-top border-primary">
                            <div class="card-header">                                                                      
                                <h5 class="">
                                    <i class="box-title text-primary fa fa-shopping-cart text-aqua"></i>
                                    Sales Invoice
                                </h5>
                                <div class="border-top">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-user input-group-text"></i>
                                                </div>
                                                <select name="" id="" class="form-control">
                                                    <option value="1">Walk-in-Customer</option>
                                                    <option value="2">John p</option>
                                                    <option value="3">Chris Moris</option>   
                                                    <option value="4">Joe Root</option>
                                                    <option value="5">John p</option>
                                                    <option value="5">Chris Moris</option>   
                                                    <option value="6">Joe Root</option>
                                                </select>
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-user-plus text-primary input-group-text"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group pt-2">
                                                <div class="input-group-prepend">
                                                    <i class="fa fa-barcode input-group-text"></i>
                                                </div>
                                                <input type="text" class="form-control"  v-model="query" placeholder="Item name/Barcode/Itemcode">
                                            </div>
                                            <ul class="bg-light list-unstyled">
                                                <li class="px-5 py-2 lead border text-success" v-for="(data , index) in searchItems" v-bind:key="data.id" @click="uploadItem(index)" style="cursor:pointer;">{{data.item_name}}</li>
                                            </ul>
                                        </div>
                                    </div>
                                        <div class="box-body mt-4 border border-primary" style="width:100%; height:300px">
                                            <div class="table-responsive p-1" style="width: 100%">
                                                <div class="col-sm-12" style="overflow-y: auto;height: 291px;">
                                                    <table class="table table-bordered table-striped table-responsive">
                                                        <thead class="bg-primary">
                                                            <tr>
                                                                <th>Item Name</th>
                                                                <th>Stock</th>
                                                                <th>Quantity</th>
                                                                <th>Price</th>
                                                                <!-- <th>Discount</th> -->
                                                                <th>Tax</th>
                                                                <th>Subtotal</th>
                                                                <th><i class="fa fa-close"></i></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody style="font-size: 16px;font-weight: bold;overflow: scroll;">
                                                            <!-- body code -->
                                                            <tr v-for="(content , index) in getData" v-bind:key="content.id">
                                                                <td>
                                                                    <span class="pointer text-bold lead px-1">{{content.item_name}} </span> 
                                                                        <span  data-toggle="modal" data-target="#exampleModalLong"> <i class="fa fa-edit"></i></span>
                                                                        <!-- Modal -->
                                                                    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                                                        <div class="modal-dialog" role="document">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header" style="background-image: -webkit-gradient(linear, left top, right top, from(rgba(32 185 174)), to(rgba(0 111 214)));color: rgb(255 255 255);">
                                                                                        <h5 class="modal-title text-center lead " id="exampleModalLongTitle"> Manage Sales Items</h5>
                                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                                            <span aria-hidden="true" class="text-light">&times;</span>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div class="modal-body">
                                                                                        <form class=" py-3 px-3 bg-gray">
                                                                                            <div class="form-row">
                                                                                            <div class="col-md-6">
                                                                                                    <div class="form-group">
                                                                                                        <label>Tax Type</label>
                                                                                                        <select class="form-control" style="width: 100%;">
                                                                                                        <option value="Exclusive">Exclusive</option>
                                                                                                        <option value="Inclusive">Inclusive</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                            </div>
                                                                                                <div class="col-md-6 mb-3">
                                                                                                    <div class="form-group">
                                                                                                        <label>Tax</label>
                                                                                                        <select class="form-control">
                                                                                                            <option value="Vat 5%">Vat 5%</option>  
                                                                                                            <option value="Tax 5%">Tax 5%</option>  
                                                                                                            <option value="Tax 10%">Tax 10%</option>  
                                                                                                            <option value="Gst 4.5%">Gst 4.5%</option>  
                                                                                                            <option value="Vat 5%">SGST 10%</option>  
                                                                                                            <option value="Vat 5%">IGST 15%</option>  
                                                                                                            <option value="Vat 5%">SGST 8%</option>  
                                                                                                            <option value="Vat 5%">IGST 6%</option>  
                                                                                                            <option value="Vat 5%">Gst 9%</option>  
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                        </div>
                                                                                            <div class="form-row">
                                                                                                <div class="col-md-6">
                                                                                                        <div class="form-group">
                                                                                                            <label>Discount Type</label>
                                                                                                            <select class="form-control" style="width: 100%;">
                                                                                                            <option value="Exclusive">Percent (%)</option>
                                                                                                            <option value="Exclusive">Fixed (Rs)</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                </div>
                                                                                                <div class="col-md-6 mb-3">
                                                                                                    <label for="validationDefault02">Discount</label>
                                                                                                    <input type="text" class="form-control" id="validationDefault02" placeholder="0"  required>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="form-row">
                                                                                                <div class="col-md-12">
                                                                                                    <div class="form-group">
                                                                                                        <label for="exampleFormControlTextarea1">Description</label>
                                                                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                    <div class="modal-footer">
                                                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                                        <button type="button" class="btn btn-success" data-dismiss="modal">Set <i class="fa fa-check fa-x2"></i></button>
                                                                                    </div>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>{{content.qty}}</td>
                                                                <td>
                                                                    <div class="input-group input-group-sm">
                                                                        <span class="input-group-btn">
                                                                            <button  type="button" class="btn btn-default btn-flat" @click="ProRem(index)">
                                                                            <i class="fa fa-minus text-danger"></i>
                                                                            </button>
                                                                        </span>
                                                                        <!-- start count result -->
                                                                        <!-- <input type="" class="form-control"> -->
                                                                        <input type="text" value="1"  class="form-control no-padding text-center" style="padding:18px">
                                                                        <!--end count result -->
                                                                        <span class="input-group-btn">
                                                                            <button type="button" class="btn btn-default btn-flat" @click="ProAdd(index)">
                                                                                <i class="fa fa-plus text-success"></i>
                                                                            </button>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td class="text-right"  name="Price">
                                                                    <input  type="text" class="form-control no-padding" :value="content.price">
                                                                </td>
                                                                <td>
                                                                    <input  title="" type="text" class="form-control no-padding pointer" :value="content.tax">
                                                                </td>
                                                                <td  class="text-right">
                                                                    <input type="text" class="form-control no-padding pointer" :value="content.price">
                                                                </td>
                                                                <td @click='deleteTableRow(index)' >
                                                                    <a class="fa fa-fw fa-trash-o text-red" style="cursor: pointer;font-size: 20px;"></a>
                                                                </td>
                                                            </tr> 
                                                        </tbody>        
                                                    </table>
                                                </div>
                                            </div>
                                        </div>  
                                    <div class="row mt-4">
                                        <div class="col-md-1 col-6">
                                            <!-- <div class="d-flex align-items-center mx-auto"> -->
                                                <input type="checkbox" disabled name="" class="form-control" id="check">
                                            <!-- </div> -->
                                        </div>
                                        <div class="col-md-4 col-6 pt-2">
                                            <label for="check">Send SMS to Customer <i class="fa fa-info-circle text-maroon text-black hover-q"></i></label>
                                        </div>
                                        <div class="offset-md-3 col-6 col-md-2 pt-2">
                                            <label for="#check">Other Charges*</label>
                                        </div>
                                        <div class="col-md-2 col-6">
                                            <input type="text" name="" placeholder="0.00" class="text-right form-control" id="check">
                                        </div>
                                    </div>
                                    <div class="mt-4 bg-light p-2 cost">
                                        <div class="row">
                                            <div class="col-md-4 text-right">
                                                <b>Quantity:</b>
                                                <br>
                                                <span class="text-primary text-bold">{{totat_quantity()}}</span>
                                            </div>
                                            <div class="col-md-4 text-right">
                                                <b>Total Amount</b>
                                                <br>
                                                <span class="text-primary text-bold">{{totalAmount()}}</span>
                                            </div>    
                                            <!-- <div class="col-md-3 text-right">
                                                <b>Total Discount:</b>
                                                <br>
                                                <span class="text-primary text-bold">0.00</span>
                                            </div>     -->
                                            <div class="col-md-4 text-right">
                                                <b>Grand Total:</b>
                                                <br>
                                                <span class="text-primary text-bold">{{totalAmount()}}</span>
                                            </div>
                                        </div>
                                        <div class="row">

                                            <!-- Start First Modal Hold -->
                                            <div class="col-md-3" style="cursor: pointer;">
                                                <button class="btn btn-danger btn-block btn-flat btn-lg"  data-toggle="modal" data-target=".bds-example-modal-lg"> 
                                                    <i class="fa fa-hand-paper-o"></i> Hold
                                                </button>
                                                <!-- Modal -->
                                                <div class="modal fade bds-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                                                                <!-- <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                                </button> -->
                                                            <div class="modal-body">
                                                                <div class="row px-2">
                                                                    <div class="col-md-12 col-12">
                                                                        <div class="icon text-center ">
                                                                            <i class="fa fa-warning text-warning fa-5x py-2"></i>
                                                                            <p class="text-bold py-4" style="font-size:1.5rem;">Hold Invoice ? Same Reference will  <br>
                                                                                replace the old list if exist!!</p>   
                                                                        </div>   
                                                                        <form class="p-2">
                                                                            <div class="form-group">
                                                                                <input type="text" class="form-control" placeholder="Please Enter Reference Number!">
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    
                                                                </div>        
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                                <button type="button" class="btn btn-danger"  data-dismiss="modal"> OK</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End First Modal Hold -->

                                            <!-- Start Second Modal Multiply -->
                                            <div class="col-md-3" style="cursor: pointer;">
                                                <button class="btn btn-primary btn-block btn-flat btn-lg"  data-toggle="modal" data-target=".bdd-example-modal-lg"> 
                                                    <i class="fa fa-credit-card"></i> Multiple
                                                </button>
                                                <!-- Modal -->
                                                <div class="modal fade bdd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                                                        <div class="modal-header" style="background-image: -webkit-gradient(linear, left top, right top, from(rgba(32 185 174)), to(rgba(0 111 214)));color: rgb(255 255 255);">
                                                            <h5 class="modal-title lead">Payments </h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row px-2">
                                                                <div class="col-md-7 col-12">
                                                                    <form class="bg-gray p-2">
                                                                            <div class="form-group">
                                                                                <label> Amount</label>
                                                                                <input type="number" class="form-control">
                                                                            </div>
                                                                            <div class="form-group">
                                                                                <select class="form-control">
                                                                                        <option value="Cash">Cash</option>
                                                                                        <option value="Card">Card</option>
                                                                                        <option value="Paytm">Paytm</option>
                                                                                        <option value="Finance">Finance</option>    
                                                                                </select>
                                                                            </div>                                                                    
                                                                            <div class="form-group">
                                                                                <label>Payment Note</label>
                                                                                <textarea class="form-control" rows="12"></textarea>
                                                                            </div>
                                                                    </form>
                                                                </div>
                                                                <div class="col-md-5 px-3 pl-5">
                                                                    <div class="col-md-12">
                                                                        <div class="">
                                                                            <div class="row">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Items:</span>
                                                                                    <span class="col-md-6 text-bold">{{quantity}}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total:</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Discount(-):</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-danger text-center p-3 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Payable:</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Paying:</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Balance :</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-warning text-center p-3 rounded">
                                                                                    <span class="col-md-6 text-bold">Changer Return:</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>        
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-danger" @click="Savesure">  <i class="fa fa-save"></i> Save</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Second Modal Multiply -->

                                            <!-- Start Third Modal Cash -->
                                            <div class="col-md-3" style="cursor: pointer;">
                                                <button class="btn btn-success btn-block btn-flat btn-lg"  data-toggle="modal" data-target=".bd-example-modal-lg"> 
                                                    <i class="fa fa-money"></i> Cash
                                                </button>
                                                <!-- Modal -->
                                                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                                                        <div class="modal-header" style="background-image: -webkit-gradient(linear, left top, right top, from(rgba(32 185 174)), to(rgba(0 111 214)));color: rgb(255 255 255);">
                                                            <h5 class="modal-title lead">Payments </h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row px-2">
                                                                <div class="col-md-7 col-12">
                                                                    <form class="bg-gray p-2">
                                                                        <div class="form-group">
                                                                            <label> Amount</label>
                                                                            <input type="number" class="form-control">
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Payment Note</label>
                                                                            <textarea class="form-control" rows="12"></textarea>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div class="col-md-5 px-3 pl-5">
                                                                    <div class="col-md-12">
                                                                        <div class="">
                                                                            <div class="row">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Items:</span>
                                                                                    <span class="col-md-6 text-bold">{{quantity}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total:</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Discount(-):</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-danger text-center p-3 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Payable:</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Paying:</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Balance :</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-warning text-center p-3 rounded">
                                                                                    <span class="col-md-6 text-bold">Changer Return:</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>        
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-danger" @click="Savesure">  <i class="fa fa-save"></i> Save</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Third Modal Cash -->
                                            <!-- Start Fourth Modal PayAll -->
                                            <div class="col-md-3" style="cursor: pointer;">
                                                <button class="btn btn-info btn-block btn-flat btn-lg"  @click="printDiv"> 
                                                    <i class="fa fa-money"></i> PayAll
                                                </button>
                                                <!-- Modal -->
                                                <!-- <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                                    <div class="modal-dialog modal-lg">
                                                        <div class="modal-content">
                                                        <div class="modal-header" style="background-image: -webkit-gradient(linear, left top, right top, from(rgba(32 185 174)), to(rgba(0 111 214)));color: rgb(255 255 255);">
                                                            <h5 class="modal-title lead">Payments </h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row px-2">
                                                                <div class="col-md-7 col-12">
                                                                    <form class="bg-gray p-2">
                                                                        <div class="form-group">
                                                                            <label> Amount</label>
                                                                            <input type="number" class="form-control">
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Payment Note</label>
                                                                            <textarea class="form-control" rows="12"></textarea>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div class="col-md-5 px-3 pl-5">
                                                                    <div class="col-md-12">
                                                                        <div class="">
                                                                            <div class="row">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Items:</span>
                                                                                    <span class="col-md-6 text-bold">{{quantity}}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total:</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Discount(-):</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-danger text-center p-3 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Payable:</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Total Paying:</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-primary text-center p-2 rounded">
                                                                                    <span class="col-md-6 text-bold">Balance :</span>
                                                                                    <span class="col-md-6 text-bold">{{totalAmount()}}</span>
                                                                                </div>
                                                                            </div>

                                                                            <div class="row border-top">
                                                                                <div class="col-md-12 bg-warning text-center p-3 rounded">
                                                                                    <span class="col-md-6 text-bold">Changer Return:</span>
                                                                                    <span class="col-md-6 text-bold">0.00</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>        
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-danger" @click="Savesure">  <i class="fa fa-save"></i> Save</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div> -->
                                            </div>
                                            <!-- End Fourth Modal PayAll -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'PosRight',
    data() {
        return {
            insertedData:[],
            searchItems:[],
            counter:0,
            incre:0,
            quantity:0,
            query:''
        }
    },

    computed:{
        getData(){
            return this.$store.state.selectedData
        }
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
        deleteTableRow: function(index){
            this.counter--;
            this.getData.splice(index,1)
            this.quantity--;

        },
        totat_quantity: function(){
            var sum = 0;
            this.getData.forEach(value=>{
                sum += parseFloat(value.qty)
            })
            return sum
        },
        totalAmount(){
                var sum = 0;
                this.getData.forEach(value => {
                    sum += Math.ceil(value.price)
                    // console.log(sum);
                })
                console.log(sum);
                return sum;
        },

        printDiv() {
            window.open("http://localhost:8080/pos" ,"", "width=700,height=500");
            // invoice.document.write("<h1>This is Invoice Page</h1>" );
            // console.log(invoice)
        },

        ProAdd(index){
            this.itemDataArr[index][3]++;
        },

        ProRem(index){
            this.itemDataArr[index][3]--;
        },
        search: function() {
        const api ='http://192.168.100.9/Project_Laravel/public/api/item/search/'+this.query; 
        axios.get(api)
        .then((res)=>{
            this.searchItems = res.data
        })
    },
    uploadItem(index){
            const items = this.searchItems[index];
            // let tax_amount = Math.ceil(items.purchase_price * (items.tax_id / 100));
            // let unit_cost = tax_amount + items.purchase_price;
                let sendData = { 
                    'item_name': items.item_name,
                    'stock':items.available_quantity,
                    'qty':1,
                    'price':items.sales_price,
                    'tax':items.tax_id,
                    'subtotal':items.sales_price,
                }
            this.getData.push(sendData)
            this.query = ''
            // console.log(selected_items); 
        },
}
    

}
</script>

<style lang="">
    
</style>
