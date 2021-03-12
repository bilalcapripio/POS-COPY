<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                                <div class="content-header">
                                    <!---Start Third card shop-->
                                    <h2 class="text-md ml-4"><span class="text-lg">Items List</span>  View / <small class="text-gray text-sm"><span>Search Items</span></small></h2>
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
                                    <div class="card">
                                            <div class="card-header">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label for="brand_id" class=" control-label">Brand</label>
                                                        <select class="form-control select2 select2-hidden-accessible" id="brand_id" name="brand_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                            <option value="">Select</option><option value="18">Lee</option><option value="19">Adidas</option><option value="20">Armany</option><option value="21">Samsung</option><option value="22">Apple</option><option value="23">Nokia</option><option value="24">D&amp;G</option><option value="25">Cipla</option><option value="26">Acanya</option><option value="27">Accupril</option><option value="28">Aayur</option><option value="29">Patanjali</option><option value="30">lifebuoy</option><option value="31">Mysore Sandal Soap</option><option value="32">Fastrack</option><option value="33">Rado Watches</option><option value="34">Rolex</option><option value="35">Colgate</option><option value="36">Vistaprint</option><option value="37">Cosmex Publishers</option><option value="38">Raymond</option><option value="39">Signature</option><option value="40">Redmi</option><option value="41">Lenovo</option>           
                                                        </select>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <label for="brand_id" class=" control-label">Category</label>
                                                        <select class="form-control select2 select2-hidden-accessible" id="brand_id" name="brand_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                            <option value="">Select</option><option value="18">Lee</option><option value="19">Adidas</option><option value="20">Armany</option><option value="21">Samsung</option><option value="22">Apple</option><option value="23">Nokia</option><option value="24">D&amp;G</option><option value="25">Cipla</option><option value="26">Acanya</option><option value="27">Accupril</option><option value="28">Aayur</option><option value="29">Patanjali</option><option value="30">lifebuoy</option><option value="31">Mysore Sandal Soap</option><option value="32">Fastrack</option><option value="33">Rado Watches</option><option value="34">Rolex</option><option value="35">Colgate</option><option value="36">Vistaprint</option><option value="37">Cosmex Publishers</option><option value="38">Raymond</option><option value="39">Signature</option><option value="40">Redmi</option><option value="41">Lenovo</option>           
                                                        </select>
                                                    </div>
                                                    <div class="col-md-4"></div> 
                                                    <div class=" col-md-2 box-tools float-right">
                                                        <a class="btn btn-block btn-info " href="/Add_item">
                                                        <i class="fa fa-plus "></i> New Item</a>
                                                    </div>  
                                                </div>
                                                <hr>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                    <div class="pull-left">
                                                    <div class="dataTables_length" id="example2_length">
                                                    <label>Show 
                                                        <select name="example2_length" aria-controls="example2" class="form-control input-sm">
                                                            <option value="10">10</option>
                                                            <option value="25">25</option>
                                                            <option value="50">50</option>
                                                            <option value="100">100</option>
                                                        </select>
                                                    </label>
                                                    </div>
                                                    </div>
                                                    <div class="pull-right">
                                                        <!-- <div id="example2_filter" class="dataTables_filter">
                                                            <label>Search:
                                                                <input type="search" class="form-control input-sm" placeholder="" aria-controls="example2">
                                                            </label>
                                                        </div> -->
                                                                    <div id="example2_processing" class="dataTables_processing panel panel-default" style="display: none;"></div>
                                                    </div>
                                                    <div class="pull-right margin-left-10 ">
                                                        <div class="dt-buttons btn-group mt-4 mr-2">  
                                                            <button @click="copyToClipboard('#texture')" class="btn btn-default buttons-copy buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                                <span>Copy</span>
                                                            </button>            
                                                            <button @click="tableToExcel('table', 'Lorem Table')" class="btn btn-default buttons-excel buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                                <span>Excel</span>
                                                            </button> 
                                                            <button @click="printPdf" class="btn btn-default buttons-pdf buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                                <span>PDF</span>
                                                            </button>
                                                            <button  @click="printable" class="btn btn-default buttons-print bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                                <span>Print</span>
                                                            </button> 
                                                            <button @click="csvExport(csvData)" class="btn btn-default buttons-csv buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                                <span>CSV</span>
                                                            </button> 
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="box-body">
                                                    <table id="example2" class="table table-bordered table-striped dataTable no-footer dtr-inline" width="100%" role="grid" aria-describedby="example2_info" style="width: 100%;" >
                                                    <thead class="bg-primary ">
                                                    <tr role="row">
                                                        <th rowspan="1" colspan="1">Product</th>
                                                        <th rowspan="1" colspan="1">Item Code</th>
                                                        <th rowspan="1" colspan="1">Item Name</th>
                                                        <th rowspan="1" colspan="1">Brand</th>
                                                        <th rowspan="1" colspan="1">Category</th>
                                                        <th rowspan="1" colspan="1">Unit</th>
                                                        <th rowspan="1" colspan="1">Purchase Price</th>
                                                        <th rowspan="1" colspan="1">Final Sales Price</th>
                                                        <th rowspan="1" colspan="1">Tax</th>
                                                        <th rowspan="1" colspan="1">Status</th>
                                                        <th rowspan="1" colspan="1">Action</th>
                                                    </tr>
                                                    </thead>
                                                <tbody>
                                                    <tr role="row" v-for="(data,index) in itemData" v-bind:key="data.id">  
                                                            <td> <img :src="'http://192.168.100.9/Project_Laravel/public/images/'+data.image" width=50 height=50 alt="Product Image"> </td> 
                                                            <td>{{data.item_code}}</td>
                                                            <td>{{data.item_name}}</td>
                                                            <td>{{data.brand_name}}</td>
                                                            <td>{{data.category_name}}</td>
                                                            <td>{{data.unit_name}}</td>
                                                            <td>{{data.purchase_price}}</td>
                                                            <td>{{data.sales_price}}</td>
                                                            <td>{{data.tax_id}}%<br>({{  data.tax_type }})</td>
                                                            <td><span  class="label label-success" style="cursor:pointer">Active </span></td>
                                                            <td><div class="btn-group" title="View Account">
                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                Action <span class="caret"></span>
                                                            </a>
                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                <li>
                                                                    <a style="cursor:pointer" href="/Add_item">
                                                                        <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a style="cursor:pointer" href="#" @click="deleteData(data.id,index)">
                                                                        <i class="fa fa-fw fa-trash text-red"></i>Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                    
                                                    </table>
                                                    <!-- <div class="next d-flex justify-content-between align-items-center">
                                                        <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 22 entries</div><div class="dataTables_paginate paging_simple_numbers" id="example2_paginate"></div>
                                                        <nav aria-label="Page navigation example">
                                                            <ul class="pagination">
                                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                            </ul>
                                                        </nav>
                                                    </div>                               -->
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
import { jsPDF } from "jspdf";


export default {
    name:'',
    data(){
        return{
            itemData:[],
            uri :'data:application/vnd.ms-excel;base64,',
            template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
            format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
        }
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    computed: {
            csvData() {
            return this.itemData.map(item => ({
                ...item,
            }));
            }
        }, 
    mounted(){
        this.getitemsData();
    },
    methods:{
        getitemsData: function(){
            axios.get("http://192.168.100.9/Project_Laravel/public/api/item")
                // return promise
            .then((res)=>{
                this.itemData=res.data;
                    console.log(res.data);
            })
                // catch error
            .catch(error =>{
                console.log(error)
            });
        },
        deleteData: function(id,index) {
            this.itemData.splice(index,1)
            axios.delete('http://192.168.100.9/Project_Laravel/public/api/item/' + id)
            .then((res)=>{
                console.log(res);
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
        },
          // Pdf Table
        printPdf(){
            // let table=document.getElementById('tabl');
            const doc = new jsPDF();
            // table = doc
            doc.text("Pdf", 10, 10);
            doc.save("Customer-List.pdf");
            // console.log(table)
        },
        // Excel or Csv Data
        tableToExcel(table, name){
            if (!table.nodeType) table = this.$refs.table
            var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
            window.location.href = this.uri + this.base64(this.format(this.template, ctx))
        },
            // Print Table
            // printDiv() {
            //     window.open("http://localhost:8080/Customers" ,"", "width=700,height=500");
            //     // invoice.document.write("<h1>This is Invoice Page</h1>" );
            //     // console.log(invoice)
            // },
            printable(){
                let table = document.querySelector('.printable');
                window.print(table);
            },
            // Csv Table
            csvExport(arrData) {
                let csvContent = "data:text/csv;charset=utf-8,";
                csvContent += [
                    Object.keys(arrData[0]).join(";"),
                    ...arrData.map(item => Object.values(item).join(";"))
                ]
                    .join("\n")
                    .replace(/(^\[)|(\]$)/gm, "");

                const data = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", data);
                link.setAttribute("download", "export.csv");
                link.click();
            },
    }
}
</script>