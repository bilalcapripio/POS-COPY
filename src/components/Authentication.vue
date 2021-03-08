<template>
    <div>
        <section>
            <div class="container">
                <form>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                        <span class="anchor" id="formLogin"></span> 
                                    <!-- form card login -->
                        <div class="card card-outline-secondary">
                            <div class="d-flex mx-auto p-3">
                            <img src="../assets/Img/pos.png" width="250" alt="AdminLTE Logo" class="img-fluid">
                            </div>
                            <div class="card-header bg-primary text-center">
                            <h4 class="mb-0 lead">Sign in to start your session</h4>
                            </div>
                            <div class="card-body">
                            <form autocomplete="off" class="form" id="formLogin" name="formLogin" role="form">
                                <div class="form-group">
                                <label for="uname1">Username</label> 
                                                    <input class="form-control" id="uname1" name="uname1" required="" type="text">
                                </div>
                                <div class="form-group">
                                <label>Password</label> 
                                                    <input autocomplete="new-password" class="form-control" id="pwd1" required="" type="password">
                                </div>
                                <div class="form-check small">
                                <label class="form-check-label">
                                                        <input class="form-check-input" type="checkbox"> 
                                                        <span>Remember me on this computer</span>
                                </label>
                                </div>
                                                <button class="btn btn-success btn-lg float-right" type="button">Login</button>
                            </form>
                            </div><!--/card-block-->
                        </div><!-- /form card login -->
                        </div>
                    </div>
                </form>
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
body{
  background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80");
  width: 100%;
  height: 100vh;
  animation: animation 100s linear infinite;
}
@keyframes animation {
  100%{
    background-position:0px -3000px;
  }
}
      section{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 100vh;
      }
</style>>
    
