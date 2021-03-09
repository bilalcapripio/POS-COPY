<template>
    <div>
        <section>
            <div class="container">
                    <div class="" >
                        <ul class="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                    </div>
                    <div class="row justify-content-center align-items-center" style="margin-left:8rem;">
                        <div class="w-50">
                            <div class="d-flex mx-auto p-4">
                                <img src="../assets/Img/pos.png" width="210" alt="AdminLTE Logo" class="img-fluid mx-5">
                            </div>
                            <!-- form card login -->
                                <div class="card card-outline-secondary w-75">
                                    <div class="card-header py- text-center">
                                        <h4 class="mb-0 lead">Sign in to start your session</h4>
                                    </div>
                                    <div class="card-body p-5">
                                        <form>
                                                <div class="input-group mb-2">
                                                    <input type="text" class="form-control"  placeholder="" value="admin">
                                                    <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-user"></i></div>
                                                    </div>
                                                </div>

                                                <div class="input-group mb-2 ">
                                                    <input type="password" class="form-control"  placeholder="" value="admin">
                                                    <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-lock"></i></div>
                                                    </div>
                                                </div>


                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                                                    <label class="form-check-label" for="inlineFormCheck">Remember me</label>
                                                    <br>
                                                </div>
                                                    <p class="py-1"><a href="#">I Forget my password</a></p>
                                                <button type="submit" class="btn btn-info float-right">Sign in</button>
                                            </form>
                                            <br>

                                            
                                    </div>
                                    <!--/card-block-->
                                </div>
                                <div class="card card-outline-secondary w-75 border-top border-danger">
                                    <div class="card-body">
                                     
                                            <div class="row">
                                                <div class="col-md-12">
                                                        <div class="btn-group btn-group-toggle d-flex mx-auto" data-toggle="buttons">
                                                            <label class="btn btn-danger border-left">
                                                                <input type="radio" name="options" id="option1" autocomplete="off" checked> Admin
                                                            </label>
                                                            <label class="btn btn-success border-left">
                                                                <input type="radio" name="options" id="option2" autocomplete="off">Sales
                                                            </label>
                                                            <label class="btn btn-info border-left">
                                                                <input type="radio" name="options" id="option3" autocomplete="off"> Purchase
                                                            </label>
                                                        </div>
                                                        <table class="table table-bordered table-hover my-2">
                                                                <thead class="bg-gray">
                                                                    <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Role</th>
                                                                    <th scope="col">Username</th>
                                                                    <th scope="col">Password</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Admin</td>
                                                                    <td>admin</td>
                                                                    <td>123456</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Sales</td>
                                                                    <td>sales</td>
                                                                    <td>123456</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Purchase</td>
                                                                    <td>purchase</td>
                                                                    <td>123456</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td colspan="4">
                                                                        <p class="text-sm text-center">
                                                                        Any number of Users & Roles you can create.
                                                                        </p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                        </table>
                                                </div>


                                            
                                                
                                            </div>
                                    </div>
                                </div>
                            <!-- /form card login -->
                        </div>
                    </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:'Authentication',
    components:{

    }
    
}
</script>
<style scoped>
section{
    background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)), url("https://i.postimg.cc/XNccJMQk/apple-pay-nfc-payment-picjumbo-com.jpg") no-repeat;
    background-size:cover ;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>>
    
