<template>
<div id="app">
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
                <Navbar/>
                    <!-- /.content-wrapper -->
                    <div class="content-wrapper p-2">
                            <div class="content-header">
                                <!-- alert start -->
                                    <div class="content-header">
                                        <div class="container-fluid">
                                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                                            <strong>Ultimate Inventory with POS new Version 1.7.7 released , Faster and Customizable Application Software. If you have any queries please message here. [Some features are disabled in demo and it will be reset after each hour.]</strong> 
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span class="text-white">&times;</span>
                                            </button>
                                        </div>
                                        </div>
                                    </div>                  
                                <!-- alert end -->

                                <!---- start Content Data table-->
                                <div class="container-fluid">
                                    <div class="card border-top border-primary">
                                        <div class="card-header">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <h1 class="display-4">Customer List</h1>
                                                </div> 
                                                <div class="col-md-6"></div> 
                                                <div class=" col-md-2 box-tools float-right mb-3">
                                                    <a class="btn btn-block btn-info " href="/Add_Customer">
                                                    <i class="fa fa-plus "></i> New  Customer </a>
                                                </div>  
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-sm-12"><div class="pull-left">
                                                <div class="dataTables_length" id="example2_length">
                                                <label>Show <select name="example2_length" aria-controls="example2" class="form-control input-sm">
                                                <option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div></div><div class="pull-right"><div id="example2_filter" class="dataTables_filter">
                                                <label class="mt-4">
                                                <input type="search" class="form-control input-sm" placeholder="Search" aria-controls="example2">
                                                </label>
                                                </div><div id="example2_processing" class="dataTables_processing panel panel-default" style="display: none;"></div></div><div class="pull-right margin-left-10 ">
                                                <div class="dt-buttons btn-group mt-4 mr-2">              
                                                <button class="btn btn-default buttons-copy buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Copy</span></button> <button class="btn btn-default buttons-excel buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Excel</span></button> <button class="btn btn-default buttons-pdf buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>PDF</span></button> <button class="btn btn-default buttons-print bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button"><span>Print</span></button> <button class="btn btn-default buttons-csv buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                <span>CSV</span></button> 
                                                <button class="btn btn-default buttons-collection buttons-colvis bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button" aria-haspopup="true"><span>Columns</span></button> 
                                                </div></div></div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="box-body">
                                                <table id="example2" class="table table-bordered table-striped dataTable dtr-inline" width="100%" role="grid" aria-describedby="example2_info" style="width: 100%;">
                                                        <thead class="bg-primary ">
                                                            <tr role="row">
                                                                    <th class="sorting" rowspan="1" colspan="1" style="width: 120px;"> Customer ID </th>
                                                                    <th class="sorting" rowspan="1" colspan="1" style="width: 150px;"> Customer Name </th>
                                                                    <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 70px;"> Mobile </th>
                                                                    <th class="sorting text-center" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 120px;"> Email </th>
                                                                    <th class="sorting" rowspan="1" colspan="1" style="width: 120px;"> Total Paid(-) </th>
                                                                    <th class="sorting" rowspan="1" colspan="1" style="width: 120px;"> Sales Due(-) </th>
                                                                    <th class="sorting" rowspan="1" colspan="1" style="width: 180px;"> Sales Return Due(+) </th>
                                                                    <th class="sorting" rowspan="1" colspan="1" style="width: 70px;"> Status </th>
                                                                    <th class="sorting" rowspan="1" colspan="1" style="width: 70px;"> Action </th>                                                            
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr role="row" v-for="index in custdata" v-bind:key="index.id">
                                                                <td>CU00{{auto++}}</td>
                                                                <td>{{index.customer_name}}</td>
                                                                <td>{{index.mobile}}</td>
                                                                <td>{{index.email}}</td>
                                                                <td>310,644.40</td>
                                                                <td>2,625.00</td>
                                                                <td>0.00</td>
                                                                <td v-for="(item, i ) in items" :key="i" :class="{ active: i === activeItem}"><span @click="selectItem(i)" class="bg-success p-1 rounded" style="cursor:pointer">Active </span></td>
                                                                <td>
                                                                    <div class="btn-group" title="View Account">
                                                                        <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                            Action <span class="caret"></span>
                                                                        </a>
                                                                        <ul  class="dropdown-menu dropdown-light pull-right">
                                                                            <li>
                                                                                <a  class="pointer" href="/Add_Customer">
                                                                                    <i class="fa fa-fw fa-edit text-primary"></i>Edit
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a  class="pointer">
                                                                                    <i class="fa fa-fw fa-money text-blue"></i>Pay Due Payments
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="pointer">
                                                                                    <i class="fa fa-fw fa-money text-blue"></i>Pay Return Due
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a class="pointer" href="#" @click="deleteData(index.id,index.index)">
                                                                                    <i class="fa fa-fw fa-trash text-danger"></i>Delete  
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>        
                                                </table>
                                                <div class="next d-flex justify-content-between align-items-center">
                                                    <div role="status" aria-live="polite">Showing 1 to 10 of 22 entries</div>
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination">
                                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                        </ul>
                                                    </nav>
                                                </div>                              
                                            </div>
                                        </div>
                                </div>
                                <!--End Product Table-->
                                </div>
                    
                                <!--End Content Data table--->
                            </div>                         
                        </div> 
                    <!-- /.content-wrapper -->
                <Footer/>
                <Sidebar/>
        </body>
</div>
</template>
<script>

import Navbar from  '../../components/Navbar.vue'
import Sidebar from '../../components/Sidebar.vue'
import Footer from  '../../components/Footer.vue'
import axios from 'axios'


export default {
    name:'',
    components: {
    Navbar,
    Sidebar,
    Footer
    },
    data(){
        return{
            custdata:[],
            auto:0,
            activeItem: null

        }
    },
    methods:{
        // delete row data
        deleteData: function(id,index) {
            this.custdata.splice(index,1)
        axios.delete('http://192.168.100.9/Project_Laravel/public/api/customer/' + id)
        .then((res)=>{
                console.log(res);
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
        },
        selectItem(i) {
            this.activeItem = i;
        },
    },
    mounted(){
        axios.get("http://192.168.100.9/Project_Laravel/public/api/customer")
                // return promise
                .then((res)=>{
                    this.custdata=res.data;
                    console.log(res.data);
                })
                // catch error
                .catch(error =>{
                    console.log(error)
                });
    }

}
</script>