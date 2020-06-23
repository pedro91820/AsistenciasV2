<?php
//Variable de Nombre
$varGral="-TS";
?>
<form id="frmGuardar<?php echo $varGral?>">
    <div class="row">
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" class="form-control " id="nombre" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="letra">Color de letra:</label>
                <input type="text" class="form-control" id="letra" required/>
            </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div class="form-group">
                <label for="base">Color base:</label>
                <input type="text" class="form-control" id="base" required/>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="base_fuerte">Color base fuerte:</label>
                <input type="text" class="form-control input-lg" id="base_fuerte" required/>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="borde">Color borde:</label>
                <input type="text" class="form-control input-lg" id="borde" required/>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col text-left">
                    <button  type="button" class="btn btn-outline-danger  activo btnEspacio" id="btnCancelarG<?php echo $varGral?>">
                        <i class='fa fa-ban fa-lg'></i>
                        Cancelar
                    </button>
                </div>

                <div class="col text-center">
                    <button type="button" class="btn btn-outline-warning activo btnEspacio" id="btnProbarG<?php echo $varGral?>" disabled>
                        <i class='fa fa-fill-drip fa-lg'></i>
                        Probar tema
                    </button>
                </div>

                <div class="col text-right">
                    <button  type="submit" class="btn btn-outline-primary  activo btnEspacio" id="btnGuardar<?php echo $varGral?>">
                        <i class='fa fa-save fa-lg'></i>
                        Guardar Información
                    </button>
                </div>
            </div>
        </div>

    </div>

</form>