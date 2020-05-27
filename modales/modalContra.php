<div class="modal fade" id="modalContra" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title" id="txtTitularFoto">Cambiar contraseña</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="actualizarContra.php" method="post" id="frmCambiarC">
        <div class="form-group has-feedback logoActivo">
            <label class="lblTitulo">Usuario:</label>
            <input type="usuario" id="uUser" class="form-control" placeholder="Escribe el nombre de usuario" readonly>
        </div>
        <div class="form-group has-feedback logoActivo">
            <label class="lblTitulo">Contraseña:</label>
            <div class="input-group has-feedback">
                <input type="password" id="uPassword" class="form-control" placeholder="Escribe la contraseña" required autofocus minlength="8" maxlength="15">
                <input id="uId" type="text" class="form-control" name="uId" style="display: none;" />
                <div class="input-group-append">
                    <button class="btn btn-primary" id="show" type="button"><i class="icon fas fa-eye"></i></button>
                </div>
            </div>
        </div>
        <div class="form-group has-feedback logoActivo">
            <button id="generar" type="button" class="btn btn-icon icon-left btn-info"><i class="fas fa-key"></i> Generar contraseña</button>
        </div>
      </div>
      <div class="modal-footer">
      <button type="submit" class="upC btn btn-icon icon-left btn-success"><i class="fas fa-sync fa-spin"></i> Actualizar contraseña</button>
      <button id="uClose" type="button" class="btn btn-icon icon-left btn-secondary" data-dismiss="modal"><i class="fas fa-window-close"></i> Cerrar</button>
      </div>
      </form>
    </div>
  </div>
</div>