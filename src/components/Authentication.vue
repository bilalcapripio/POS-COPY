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
                                            <div class="form-group">
                                                <input class="form-control"  required type="text" value="admin">
                                            </div>

                                            <div class="form-group">
                                                <input  class="form-control"  required type="password" value="admin">
                                            </div>

                                            <div class="form-check small">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="checkbox"> 
                                                    <span>Remember me on this computer</span>
                                                    <br>
                                                    <span><a href="$">I Forget my password </a></span>

                                                </label>
                                            </div>
                                            <button class="btn btn-info float-right">Login</button>
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
    
