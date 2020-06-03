<div class="modal fade" id="modalContraU" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title" id="txtTitularFoto">Cambiar contraseña</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="actualizarContraU.php" method="post" id="frmCambiarU">
        <div class="form-group has-feedback logoActivo">
            <label class="lblTitulo">Contraseña:</label>
            <div class="input-group has-feedback">
                <input type="password" id="uPasswordC" class="form-control" placeholder="Escribe la contraseña" required autofocus minlength="8" maxlength="15">
                <input id="uIdC" type="text" class="form-control" name="uIdC" style="display: none;" />
                <div class="input-group-append">
                    <button class="btn btn-primary" id="showC" type="button"><i class="iconC fas fa-eye"></i></button>
                </div>
            </div>
        </div>
        <div class="form-group has-feedback logoActivo">
            <label class="lblTitulo">Confirmar contraseña:</label>
            <div class="input-group has-feedback">
                <input type="password" id="uPasswordC2" class="form-control" placeholder="Escribe la contraseña" required minlength="8" maxlength="15">
                <div class="input-group-append">
                    <button class="btn btn-primary" id="show2C" type="button"><i class="iconC2 fas fa-eye"></i></button>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
      <button type="submit" id="upCont" disabled class="upC btn btn-icon icon-left btn-success"><i class="fas fa-sync fa-spin"></i> Actualizar contraseña</button>
      <button id="uCloseC" type="button" class="btn btn-icon icon-left btn-secondary" data-dismiss="modal"><i class="fas fa-window-close"></i> Cerrar</button>
      </div>
      </form>
    </div>
  </div>
</div>