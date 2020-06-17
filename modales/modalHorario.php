<div class="modal fade" id="modalHorario" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title" id="txtTitularFoto">Horarios</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action="#" method="post" id="frmHorario" data-action="agregar">
      <div class="row">
          <div class="form-group col-sm-12 col-md-6 col-lg-6">
              <label class="hUser">Usuario:</label>
              <input type="text" id="hUser" class="form-control" readonly>
          </div>
          <div class="form-group col-sm-12 col-md-6 col-lg-6">
              <label class="lblTitulo">Turno:</label>
              <select id="hTurno" class="select2" style="width: 100%" >
              <option value="">Seleccione..</option>
                <option value="especial">Turno especial</option>
                <option value="matutino">Turno matutino</option>
                <option value="vespertino">Turno vespertino</option>
                <option value="nocturno">Turno nocturno</option>
              </select>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
          <input id="hId" type="text" class="form-control" name="hId" style="display: none;" />
              <label class="lblTitulo">Lunes(E):</label>
              <input type="time" id="hLunE" class="diaH diaE form-control" required readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Lunes(S):</label>
              <input type="time" id="hLunS" class="diaH diaS form-control" required readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Martes(E):</label>
              <input type="time" id="hMarE" class="diaH diaE form-control" required readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Martes(S):</label>
              <input type="time" id="hMarS" class="diaH diaS form-control" required readonly>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Miercoles(E):</label>
              <input type="time" id="hMierE" class="diaH diaE form-control" required readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Miercoles(S):</label>
              <input type="time" id="hMierS" class="diaH diaS form-control" required readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Jueves(E):</label>
              <input type="time" id="hJuevE" class="diaH diaE form-control" required readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Jueves(S):</label>
              <input type="time" id="hJuevS" class="diaH diaS form-control" required readonly>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Viernes(E):</label>
              <input type="time" id="hVierE" class="diaH diaE form-control" required readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Viernes(S):</label>
              <input type="time" id="hVierS" class="diaH diaS form-control" required readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Sabado(E):</label>
              <input type="time" id="hSabE" class="diaH hEsp form-control" readonly>
          </div>
          <div class="form-group col-sm-12 col-md-3 col-lg-3">
              <label class="lblTitulo">Sabado(S):</label>
              <input type="time" id="hSabS" class="diaH hEsp form-control" readonly>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-12 col-md-4 col-lg-4">
              <label class="lblTitulo">Domingo(E):</label>
              <input type="time" id="hDomE" class="diaH hEsp form-control" readonly>
          </div>
          <div class="form-group col-sm-12 col-md-4 col-lg-4">
              <label class="lblTitulo">Domingo(S):</label>
              <input type="time" id="hDomS" class="diaH hEsp form-control" readonly>
          </div>
          <div class="form-group col-sm-12 col-md-4 col-lg-4">
            <label class="lblTitulo">Cantidad de horas:</label>
            <input type="text" id="hCnHoras" class="form-control" readonly>
            <input id="cH" type="text" class="form-control" name="cH" style="display: none;"/>
            <input id="tieneD" type="text" class="form-control" name="tieneD" style="display: none;" />
          </div>
        </div>
      <div class="modal-footer">
      <button type="submit" class="hSave btn btn-icon icon-left btn-success" disabled><i class="fas fa-save"></i> Guardar</button>
      <button id="uClose" type="button" class="btn btn-icon icon-left btn-secondary" data-dismiss="modal"><i class="fas fa-window-close"></i> Cerrar</button>
      </div>
      </form>
    </div>
  </div>
</div>
</div>