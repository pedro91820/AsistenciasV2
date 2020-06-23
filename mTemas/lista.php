<?php
// Conexion mysqli
include'../conexion/conexionli.php';

include'../funciones/diasTranscurridos.php';
//Variable de Nombre
$varGral="-TS";

$cadena = "SELECT
                id_tema,
                activo,
                nombre_tema,
                color_letra,
                color_base,
                color_base_fuerte,
                color_borde,
                fecha_registro,
                hora_registro
            FROM
                temas ORDER BY id_tema DESC";

$consultar = mysqli_query($conexionLi, $cadena);

?>
<div class="table-responsive">
<table id="example<?php echo $varGral;?>" class="table table-striped table-bordered" style="width:100%">

        <thead>
            <tr class='hTabla'>
                <th scope="col">#</th>
                <th scope="col">Editar</th>
                <th scope="col">Exportar</th>
                <th scope="col">Aplicar tema</th>
                <th scope="col">Nombre tema</th>
                <th scope="col">Status</th>
            </tr>
        </thead>

        <tbody>
        <?php
        // Recorro el arreglo y le asigno variables a cada valor del item
        $n=1;
        $fecha_create   = date("Y-m-d"); 
        while( $row = mysqli_fetch_array($consultar) ) {

            $id          = $row[0];

            if ($row[1] == 1) {
                $chkChecado    = "checked";
                $dtnDesabilita = "";
                $chkValor      = "1";
                $iconSound="fa fa-volume-up fa-lg";
            }else{
                $chkChecado    = "";
                $dtnDesabilita = "disabled";
                $chkValor      = "0";
                $iconSound="fa fa-volume-mute fa-lg";
            }

            $nombre     = $row[2];
            $color_letra    = $row[3];
            $color_base   = $row[4];
            $color_base_fuerte       = $row[5];
            $color_borde = $row[6];
            $fecha       = $row[7];
            $hora     = $row[8];
            $dias_transcurridos = dias_transcurridos($fecha,$fecha_create);
            $days = substr($dias_transcurridos, 1);
            $infoCompleta  = $row[2].' creado hace '.$days.' dias, a las '.$hora;

            //$foto       = '../fotos/'.$clave.'.jpg';

            ?>
            <tr class="centrar">
                <th scope="row" class="textoBase">
                    <?php echo $n?>
                </th>
                <td>
                    <button <?php echo $dtnDesabilita?> type="button" class="editar btn btn-outline-success btn-sm activo" id="btnEditar<?php echo $varGral?><?php echo $n?>" onclick="llenar_formulario_TS('<?php echo $id?>','<?php echo $nombre?>','<?php echo $color_letra?>','<?php echo $color_base?>','<?php echo $color_base_fuerte?>','<?php echo $color_borde?>')">
                                <i class="far fa-edit fa-lg"></i>
                    </button>
                <td>
                    <button <?php echo $dtnDesabilita?> type="button" class="imprimir btn btn-outline-warning btn-sm activo" onclick="exportarTema()">
                                <i class="fas fa-file-export fa-lg"></i>
                    </button>
                </td>
                <td>
                    <button <?php echo $dtnDesabilita?> type="button" class="ventana btn btn-outline-info btn-sm activo"  id="btnModal<?php echo $varGral?><?php echo $n?>" onclick="abrirModalDatos_DP('')">
                        <i class="fa fa-fill-drip fa-lg"></i>
                    </button>
                </td>

                <td>
                    <label class="textoBase">
                        <?php echo $infoCompleta?>
                    </label>
                </td>
                <td>
                    <input value="<?php echo $chkValor?>" onchange="cambiar_estatus_DP(<?php echo $id?>,<?php echo $n?>)" class="toggle-two" type="checkbox" <?php echo $chkChecado?> data-toggle="toggle" data-onstyle="outline-success" data-width="60" data-size="sm" data-offstyle="outline-danger" data-on="<i class='fa fa-check'></i> Si" data-off="<i class='fa fa-times'></i> No" id="check<?php echo $n?>">
                </td>
            </tr>
        <?php
        $n++;
        }
        ?>

        </tbody>
        <tfoot>
            <tr class='hTabla'>
            <th scope="col">#</th>
            <th scope="col">Editar</th>
            <th scope="col">Exportar</th>
            <th scope="col">Aplicar tema</th>
            <th scope="col">Nombre tema</th>
            <th scope="col">Status</th>
            </tr>
        </tfoot>
    </table>
<div>

<?php
//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexionLi
mysqli_close($conexionLi);
?>

<script type="text/javascript">
  var varGral='<?php echo $varGral?>';
  $(document).ready(function() {
        $('#example'+varGral).DataTable( {
            "language": {
                    // "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
                    "url": "../plugins/dataTablesB4/langauge/Spanish.json"
                },
            "order": [[ 0, "asc" ]],
            "paging":   true,
            "ordering": true,
            "info":     true,
            "responsive": true,
            "searching": true,
            stateSave: true,
            dom: 'Bfrtip',
            lengthMenu: [
                [ 10, 25, 50, -1 ],
                [ '10 Registros', '25 Registros', '50 Registros', 'Todos' ],
            ],
            columnDefs: [ {
                // targets: 0,
                // visible: false
            }],
            buttons: [
                      {
                          text: "<i class='fas fa-plus fa-lg' aria-hidden='true'></i> &nbsp;Nuevo Registro",
                          className: 'btn btn-outline-primary btnEspacio',
                          id: 'btnNuevo',
                          action : function(){
                            nuevo_registro_TS();
                          }
                      },
                      {
                          extend: 'excel',
                          text: "<i class='far fa-file-excel fa-lg' aria-hidden='true'></i> &nbsp;Exportar a Excel",
                          className: 'btn btn-outline-secondary btnEspacio',
                          title:'Lista_datos_personales',
                          id: 'btnExportar',
                          exportOptions: {
                            columns:  [6,7,8,9,10],
                          }
                      },
                      {
                          text: "<i class='fas fa-file-import fa-lg' aria-hidden='true'></i> &nbsp;Importar tema",
                          className: 'btn btn-outline-dark btnEspacio',
                          id: 'btnNuevo',
                          action : function(){
                            abrirModalImportar();
                          }
                      }
            ]
        } );
    } );

</script>

<script>
    $('.toggle-two').bootstrapToggle();
    $(function () {
      $('#letra,#base,#base_fuerte,#borde').colorpicker();
    });

    $(function () {
        $('#eletra,#ebase,#ebase_fuerte,#eborde').colorpicker();
    });
</script>