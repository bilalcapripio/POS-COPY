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
                                                    <input type="text" class="form-control"  placeholder="" value="admin">
                                                    <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-user"></i></div>
                                                    </div>
                                                </div>


                                                <div class="form-check mb-2 mr-sm-2">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                                                    <label class="form-check-label" for="inlineFormCheck">
                                                    Remember me
                                                    </label>
                                                </div>

                                                <button type="submit" class="btn btn-info float-right">Sign in</button>
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
    
