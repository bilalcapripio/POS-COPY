<template>
    <div>
<!--//////////////////----Start Navbar----//////////////////-->
        <nav class=" navbar navbar-expand-lg navbar-primary navbar-dark">
            <!-- Left navbar links -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item pl-5 pt-2 text-light">
                        <a href="/" class="text-light">
                            <h5>Ultimate Inventory with POS</h5>
                        </a>   
                    </li>
                    <!-- <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">POS</a>
                    </li> -->
                    <li class="nav-item pl-3">
                        <a class="nav-link" data-toggle="dropdown" href="/Sales">
                            <i class="fa fa-list text-yellow"></i>
                            Sales List
                        </a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link" data-toggle="dropdown" href="/pos">
                            <i class="fa fa-calculator text-yellow "></i>
                            New Invoice
                        </a>
                    </li>
                    <li class="nav-item pl-2">
                        <a class="nav-link" data-toggle="dropdown" href="/items">
                            <i class="fa  fa-cubes text-yellow "></i>
                            Item List
                        </a>
                    </li>
                </ul>
                <!-- Right navbar links -->
                <ul class="navbar-nav ml-auto">         
                    <!--Start  Modal -->
                        <!-- Button trigger modal -->
                        <!-- <a class="btn btn-primary text-light" data-toggle="modal" data-target="#exampleModal">
                            <i class="fa fa-laptop"></i>
                            Hold List
                            <span class="badge badge-danger">0</span>
                        </a> -->
                        <a class="btn btn-primary text-light" data-toggle="modal" data-target="#exampleModal">
                            <i class="fa fa-laptop"></i>
                            <!-- Home -->
                            <!-- <span class="badge badge-danger">0</span>  -->
                        </a> 
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"> Hold List</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <table class="table table-bordered">
                                        <thead class="thead bg-primary">
                                            <tr>
                                                <th rowspan="1" colspan="1" >ID</th>
                                                <th rowspan="1" colspan="1" >Date</th>
                                                <th rowspan="1" colspan="1" >Ref:ID</th>
                                                <th rowspan="1" colspan="1" >Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <p class="text-danger">Not Found</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    <!--End  Modal -->

                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="/">
                            <i class="fa fa-dashboard"></i>
                            Dashboard
                        </a>
                    </li>

                    <li class="dropdown user user-menu open mt-2 ml-2">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <img src="@/assets/Img/admin.png" class="user-image" alt="User Image">
                        <span class="hidden-xs text-light">Admin</span>
                        </a>

                        <ul class="dropdown-menu bg-gradient-navy rounded">
                        <!-- User image -->
                        <li class="user-header">
                            <img src="@/assets/Img/admin.png" class="img-circle img-fluid" alt="User Image">
                            <p>Admin<small>Year 2021</small></p>
                        </li>
                        <!-- Menu Body -->
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <div class="pull-left">
                            <a href="#" class="btn btn-primary btn-flat">Profile</a>
                            </div>
                            <div class="pull-right">
                            <a href="Logout.html" class="btn btn-danger btn-flat">Sign out</a>
                            </div>
                        </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>   
<!--//////////////////----End Navbar----//////////////////-->
        <main>
            <div class="container-fluid mt-3">
                <div class="row">
                    <PosLeft/>
                    <PosRight/>

                </div>
            </div>
        </main>
    </div>
</template>

<script>

// import axios from 'axios'
import PosLeft from '../../components/Main-Pos/PosLeft';
import PosRight from '../../components/Main-Pos/PosRight';



export default {
    components:{
        PosLeft,
        PosRight

        },
    data(){
        return{
         
            itemDataArr:[],
            // counter:0,
            // incre:0,
            // quantity:0,
            Price:2000,
            res:[]
        }
    },
    mounted(){
        // this.getitemsData();
    },
    // computed:{
    //     product(){
    //         return this.$store.state.alldata
    //         }
    //     },
    methods:{
       
        
    }
        
}
</script>
<style>
body{
    overflow-x:hidden;

}
main{
    position: relative;
    left: 10%;
}
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey,
            inset -0 0 10px grey; 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #d44141; 
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: red; 
    }

    @media(max-width: 360px){
        .navbar-nav li{
            text-align: center;
            padding: 10px;
        }
        .user-image{
            display:none;
        }
        .cost .row{
            text-align: center !important;
            clear: none;
        }
    }
</style>