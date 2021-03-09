<template>
    <div>
        <section>
            <div class="container">
                    <div class="row justify-content-center align-items-center" style="margin-left:8rem;">
                        <div class="w-50">
                            <div class="d-flex mx-auto p-4">
                                <img src="../assets/Img/pos.png" width="270" alt="AdminLTE Logo" class="img-fluid mx-4">
                            </div>
                            <!-- form card login -->
                                <div class="card card-outline-secondary w-75">
                                    <div class="card-header py-3 text-center">
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
                                                    <p class="py-2"><a href="#">I Forget my password</a></p>
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
                                                        <table class="table table-bordered my-2">
                                                                <thead class="">
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
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Jacob</td>
                                                                    <td>Thornton</td>
                                                                    <td>@fat</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Larry</td>
                                                                    <td>the Bird</td>
                                                                    <td>@twitter</td>
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
</style>>
    
