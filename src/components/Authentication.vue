<template>
    <div>
        <section>
            <div class="container">
                    <div class="row justify-content-center align-items-center" style="margin-left:2.3rem;">
                        <div class="w-50">
                            <div class="d-flex mx-auto p-3">
                                <img src="../assets/Img/pos.png" width="250" alt="AdminLTE Logo" class="img-fluid">
                            </div>
                            <!-- form card login -->
                                <div class="card card-outline-secondary w-75">
                                    <div class="card-header py-4 text-center">
                                        <h4 class="mb-0 lead">Sign in to start your session</h4>
                                    </div>
                                    <div class="card-body p-5">
                                        <form>
                                            <div class="form-group">
                                                <label for="uname1">Username</label> 
                                                <input class="form-control"  required type="text">
                                            </div>

                                            <div class="form-group">
                                                <label>Password</label> 
                                                <input  class="form-control"  required type="password">
                                            </div>

                                            <div class="form-check small">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="checkbox"> 
                                                    <span>Remember me on this computer</span>
                                                </label>
                                            </div>

                                            <button class="btn btn-success btn-lg float-right">Login</button>
                                        </form>
                                    </div>
                                    <!--/card-block-->
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
    
