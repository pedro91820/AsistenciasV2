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
$cadena = "INSERT INTO horarios
				(id_datos_persona,
				turno,
				l_entrada, 
				l_salida, 
				m_entrada, 
				m_salida, 
				mi_entrada, 
				mi_salida, 
				j_entrada, 
				j_salida,
                v_entrada,
                v_salida,
                s_entrada,
                s_salida, 
                d_entrada,
                d_salida,
				fecha_registro, 
				hora_registro)
			VALUES
				('$idUser',
				'$hTurno',
				'$hLunE', 
				'$hLunS', 
				'$hMarE', 
				'$hMarS', 
				'$hMierE', 
				'$hMierS',
				'$hJuevE',
				'$hJuevS',
                '$hVierE',
				'$hVierS',
                '$hSabE',
				'$hSabS',
                '$hDomE',
				'$hDomS',
				'$fecha', 
				'$hora')";
$insertar = mysqli_query($conexionLi, $cadena);

//En caso de error imprime
print_r(mysqli_error($conexionLi));
//Cierro la conexion
mysqli_close($conexionLi);
?>