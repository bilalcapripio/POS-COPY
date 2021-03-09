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
                                            <h5 class="card-header display-5">Please Enter Valid Data</h5>
                                        </div>
                                        <div class="card-body">
                                            <form>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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