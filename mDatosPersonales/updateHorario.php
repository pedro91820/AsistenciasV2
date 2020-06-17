<?php
// Conexion mysqli
include ("../conexion/conexionli.php");

//Recibo valores con el metodo POST
$hLunE     = trim($_POST['hLunE']);
$hLunS    = trim($_POST['hLunS']);
$hMarE = trim($_POST['hMarE']);
$hMarS = trim($_POST['hMarS']);
$hMierE      = trim($_POST['hMierE']);
$hMierS    = trim($_POST['hMierS']);
$hJuevE      = trim($_POST['hJuevE']);
$hJuevS = trim($_POST['hJuevS']);
$hVierE      = trim($_POST['hVierE']);
$hVierS = trim($_POST['hVierS']);
$hSabE      = trim($_POST['hSabE']);
$hSabS = trim($_POST['hSabS']);
$hDomE      = trim($_POST['hDomE']);
$hDomS      = trim($_POST['hDomS']);
$hTurno    = trim($_POST['hTurno']);
$idUser    = trim($_POST['idUser']);

$fecha=date("Y-m-d"); 
$hora=date ("H:i:s");

//Inserto registro en tabla pacientes 
$cadena = "UPDATE horarios
			SET
            turno          = '$hTurno',
            l_entrada         = '$hLunE',
            l_salida     = '$hLunS', 
            m_entrada     = '$hMarE', 
            m_salida           = '$hMarS', 
            mi_entrada          = '$hMierE', 
            mi_salida      = '$hMierS', 
            j_entrada           = '$hJuevE', 
            j_salida         = '$hJuevS', 
            v_entrada      = '$hVierE', 
            v_salida         = '$hVierS',
            s_entrada      = '$hSabE', 
            s_salida         = '$hSabS',
            d_entrada      = '$hDomE', 
            d_salida         = '$hDomS', 
			fecha_registro = '$fecha', 
			hora_registro  = '$hora'
			WHERE 
            id_datos_persona= $idUser";
$actualizar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>