<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                        <div class="content-wrapper p-2">
                            <div class="content-header">
                                    <!---Start Third card shop-->
                                    <h2 class="text-md ml-4"><span class="text-lg">Expense Category List</span></h2>
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
                                    <div class="card border-top border-primary">
                                            <div class="card-header">
                                                <div class="row">
                                                    <div class="col-md-4"></div> 
                                                    <div class="col-md-6"></div> 
                                                    <div class=" col-md-2 box-tools float-right mb-4">
                                                        <a class="btn btn-block btn-info " href="#">
                                                        <i class="fa fa-plus "></i> Add Category </a>
                                                    </div>  
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="pull-left">
                                                            <div class="dataTables_length" id="example2_length">
                                                                <label>
                                                                    Show
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
                                                                <label class="mt-4">
                                                                    <input type="search" class="form-control input-sm" placeholder="Search" aria-controls="example2">
                                                                </label>
                                                            </div> -->
                                                            <div id="example2_processing" class="dataTables_processing panel panel-default" style="display: none;">
                                                            </div>
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
                                                                    <button @click="printable" class="btn btn-default buttons-print bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                                        <span>Print</span>
                                                                    </button> 
                                                                    <button @click="csvExport(csvData)" class="btn btn-default buttons-csv buttons-html5 bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button">
                                                                        <span>CSV</span>
                                                                    </button> 
                                                                <!-- <button class="btn btn-default buttons-collection buttons-colvis bg-teal color-palette btn-flat" tabindex="0" aria-controls="example2" type="button" aria-haspopup="true">
                                                                    <span>Columns</span>
                                                                </button>  -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="box-body">
                                                    <table id="example2 tabl example-table loremTables texture" class="table table-bordered table-striped dataTable no-footer dtr-inline printable" width="100%" role="grid" aria-describedby="example2_info" style="width: 100%;">
                                                        <thead class="bg-primary ">
                                                            <tr role="row"><th class="text-center sorting_disabled" rowspan="1" colspan="1" style="width: 88px;" aria-label="">
                                                                <div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" class="group_check checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                                                            </th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 322px;" aria-label="Category Name: activate to sort column ascending">Category Name</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 309px;" aria-label="Description: activate to sort column ascending">Description</th><th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" style="width: 174px;" aria-label="Status: activate to sort column ascending">Status</th><th class="sorting_disabled" rowspan="1" colspan="1" style="width: 230px;" aria-label="Action">Action</th></tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr role="row" class="odd" v-for="data in categoryData" v-bind:key="data.id">
                                                                    <td class=" text-center" tabindex="0">
                                                                        <div class="icheckbox_square-orange" aria-checked="false" aria-disabled="false" style="position: relative;">
                                                                            <input type="checkbox" name="checkbox[]" value="37" class="checkbox column_checkbox" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;">
                                                                            <ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                                                        </div>
                                                                    </td>
                                                                    <td>{{data.category_name}}</td>
                                                                    <td>{{data.description}}</td>
                                                                    <td>
                                                                        <span id="span_37" class="badge badge-success" style="cursor:pointer">Active </span>
                                                                    </td>
                                                                    <td>
                                                                        <div class="btn-group" title="View Account">
                                                                            <a class="btn btn-primary btn-o dropdown-toggle" data-toggle="dropdown" href="#">
                                                                                Action 
                                                                                <span class="caret"></span>
                                                                            </a>
                                                                            <ul role="menu" class="dropdown-menu dropdown-light pull-right">
                                                                                <li>
                                                                                    <a title="Edit Record ?" @click="editData(data.id)" href="expense_update/37">
                                                                                        <i class="fa fa-fw fa-edit text-blue"></i>Edit
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a style="cursor:pointer" title="Delete Record ?" href="#" @click="deleteData(data.id,data.index)">
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
            categoryData:[],
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
        return this.categoryData.map(item => ({
            ...item,
        }));
        }
    }, 
    mounted(){
        this.getcategoryData()
    },
    methods:{
        getcategoryData: function(){
            axios.get("http://192.168.100.9/Project_Laravel/public/api/expence_category")
                // return promise
            .then((res)=>{
                this.categoryData=res.data;
                    console.log(res.data);
                })
                // catch error
            .catch(error =>{
                console.log(error)
            });
        },
        deleteData: function(id,index) {
            this.categoryData.splice(index,1)
            axios.delete('http://192.168.100.9/Project_Laravel/public/api/expence_category/' + id)
            .then((res)=>{
                console.log(res);
            })
            // catch error
            .catch(error =>{
                console.log(error)
            });
        },
        editData: function(id) {
            axios.put('http://192.168.100.9/Project_Laravel/public/api/expence_category/' + id)
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

<style scoped>
@media print {
    * {display:none;}
    .printable, .printable > * {display:block;}
}
</style>