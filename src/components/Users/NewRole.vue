<template>
        <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <div>
                <Navbar/>
                    <!-- /.content-wrapper -->
                <div class="content-wrapper p-2">
                    <div class="content-header">
                        <h2 class="text-md ml-4"><span class="text-lg">New Roles   </span>  Add / <small class="text-gray text-sm"><span>Update Role</span></small></h2>
                        <div class="container-fluid">   
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h5 class="card-header lead">Please Enter Valid Data</h5>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <form class="mx-auto">
                                                        <div class="form-group row">
                                                            <label for="staticEmail" class="col-sm-2 col-form-label">Role Name<span class="text-danger">*</span> </label>
                                                            <div class="col-sm-10">
                                                            <input type="text"  class="form-control" id="staticEmail">
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
                                                            <div class="col-sm-10">
                                                                <textarea name=""  class="form-control"  id="" cols="30" rows="3"></textarea>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="col-md-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- start table -->
                            <div class="col-sm-8">
                                <table class="table table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Modules</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Role</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Tax</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Currency</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Units</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Payment Types</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Site Settings</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Company Profile</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>Dashboard</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>Places</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>Expense</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td>Items</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">13</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>User</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- end table -->
                        </div>
                    </div> 
                    <Footer/>
                    <Sidebar/>
                </div> 
            </div> 
                    <!-- /.content-wrapper -->
        </body>
</template>
<script>

import Navbar from  '../../components/Navbar.vue'
import Sidebar from '../../components/Sidebar.vue'
import Footer from  '../../components/Footer.vue'

export default {
    name:'',

    components: {
        Navbar,
        Sidebar,
        Footer
    },
}
</script>