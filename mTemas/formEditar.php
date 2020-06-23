<?php
//Variable de Nombre
$varGral="-TS";
?>
<form id="frmActualizar<?php echo $varGral?>">

<input type="hidden"  id="eId">

    <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="enombre">Nombre:</label>
                <input type="text" class="form-control " id="enombre" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="eletra">Color de letra:</label>
                <input type="text" class="form-control input-lg" id="eletra" value="" required/>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="ebase">Color base:</label>
                <input type="text" class="form-control input-lg" id="ebase" value="" required/>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="ebase_fuerte">Color base fuerte:</label>
                <input type="text" class="form-control input-lg" id="ebase_fuerte" value="" required/>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eborde">Color borde:</label>
                <input type="text" class="form-control input-lg" id="eborde" value="" required/>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col text-left">
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelarA<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>
                <div class="col text-center">
                    <button type="button" class="btn btn-outline-warning activo btnEspacio" id="btnProbarA<?php echo $varGral?>">
                        <i class='fa fa-fill-drip fa-lg'></i>
                        Probar tema
                    </button>
                </div>
                <div class="col text-right">
                    <button  type="submit" class="btn btn-outline-success  activo btnEspacio" id="btnActualizar<?php echo $varGral?>">
                        <i class='fa fa-bolt fa-lg'></i>
                        Actualizar Información
                    </button>
                </div>
            </div>
        </div>
    </div>

</form>