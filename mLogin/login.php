<div class="login-box" >
    <div class="login-box-body bordeLogin">

        <p class="tituloLogin">Sistema Control de Accesos</p>
        
        <form action="verificar_login.php" method="post" id="frmLogin" style="border-color:#40739e">
            <div class="form-group has-feedback logoActivo">
                <label class="lblTitulo">Usuario:</label>
            <input type="usuario" id="loginUsuario" class="form-control" placeholder="Escribe el nombre de usuario" autofocus required>
            </div>
            <div class="form-group has-feedback">
                <label class="lblTitulo">Contraseña:</label>
            <input type="password" id="loginContra" class="form-control" placeholder="Escribe la contraseña" required>
           
            </div>
                
            <div class="row">
                <div class="col text-left">
                
                <input class="toggle-two" type="checkbox" name="changeC" data-toggle="toggle" data-onstyle="success" data-offstyle="danger" data-on="<i class='fas fa-sync'></i> Cambiar contra" data-off="<i class='fas fa-times'></i> Cancelar" id="changeC">
                </div>

                <div class="col text-right">
                    <button type="submit" class="btn btn-outline-dark active" id="btnIngresar" disabled>
                        <i class="fas fa-lock" id="icoLogin"></i>
                        Ingresar al sistema
                    </button>
                </div>
            </div>
       
        </form>
    </div>
</div>