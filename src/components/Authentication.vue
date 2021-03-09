<template>
    <div>
        <section>        
            <div class="container">
                    <div class="login-logo">
                        <a href="index.php"><b>
                        <img src="https://pos.creatantech.com/uploads/invenoty_with_POS1(1).png" width="60%" height="70px">
                        </b></a>
                    </div>
                    <!-- /.login-logo -->
                    <div class="login-box-body">
                        <p class="login-box-msg">Sign in to start your session</p>
                        <div class="text-danger tex-center"></div>
                        <div class="text-success tex-center"></div>
                            
                        
                            <form action="https://pos.creatantech.com/login/verify" method="post">
                            <input type="hidden" name="csrf_test_name" value="fa0ca356a603b8d474b72d1068162961">
                            <div class="form-group has-feedback">
                                <input type="text" class="form-control" value="admin" placeholder="Username" id="username" name="username" autofocus=""><span class="glyphicon glyphicon-user form-control-feedback"></span>
                            </div>
                            <div class="form-group has-feedback">
                                <input type="password" class="form-control" value="123456" placeholder="Password" id="pass" name="pass">
                                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div class="row">
                                <div class="col-xs-8">
                                <div class="checkbox icheck">
                                    <label>
                                    <div class="icheckbox_square-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> Remember Me
                                    </label>
                                </div>
                                </div>
                                <!-- /.col -->
                                <div class="col-xs-4">
                                <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                                <!-- /.col -->
                            </div>
                            </form>
                            <a href="#">I forgot my password</a><br>
                            <div class="row">
                            <div class="col-md-12 text-right">
                                <p style="font-style: italic;">Version 1.7.7</p>   
                            </div>
                            </div>
                    </div>
                    <!-- /.login-box-body -->
                <div class="box">
                        <div class="box-body">
                        <div class="row">
                            
                            <div class="btn-group col-xs-12">
                                <button type="button" class="col-xs-4 btn btn-default btn-md bg-maroon admin" title="Click here for Login as Admin">Admin</button>
                                <button type="button" class="col-xs-4 btn btn-default btn-md bg-green sales" title="Click here for Login as Sales Person">Sales</button>
                                <button type="button" class="col-xs-4 btn btn-default btn-md bg-purple purchase" title="Click here for Login as Purchase Person">Purchase</button>
                            </div>
                            <br>
                            <br>
                            
                        <div class="col-xs-12">
                            <table class="table table-bordered table-condensed text-center">
                            <thead class="bg-gray">
                            <tr>
                            <td>Role</td>
                            <td>Username</td>
                            <td>Password</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>Admin</td>
                            <td>admin</td>
                            <td>123456</td>
                            </tr>
                            <tr>
                            <td>Sales</td>
                            <td>sales</td>
                            <td>123456</td>
                            </tr>
                            <tr>
                            <td>Purchase</td>
                            <td>purchase</td>
                            <td>123456</td>
                            </tr>
                            <tr>
                            <td colspan="3">Any number of Users &amp; Roles you can create.</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        </div>
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
  /* animation: animation 100s linear infinite; */
}
/* @keyframes animation {
  100%{
    background-position:0px -3000px;
  }
} */
section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
}
</style>>
    
