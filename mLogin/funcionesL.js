//Hace la validacion del usuario y la contraseña
$("#frmLogin").submit(function(e){

    var usuario    = $("#loginUsuario").val();
    var contra     = $("#loginContra").val();
    var status = $("#changeC").prop('checked');
    $.ajax({
        url:"../mLogin/validar_login.php",
        type:"POST",
        dateType:"json",
        data:{usuario,contra},
        success:function(respuesta){
            var dataArray = JSON.parse(respuesta);
             //console.log(respuesta);
            var registros=dataArray.cRegistros;
            var dias=dataArray.dias;
            if (registros !=0 ) {//existe el usuario
                if(dias < 0){//caducidad
                    swal({
                        title: "Mensaje!",
                        text: "A caducado tu suscripción al sistema",
                        type: "error",
                        confirmButtonClass: "btn-dark",
                        confirmButtonText: "Enterado"
                    }, function (isConfirm) {
                        $("#btnIngresar").attr("disabled","disabled");
                        var h_sidebar="#c0392b";
                        var color_base="#e74c3c";
                        var letra_color="#fff";
                        var color_borde="#e74c3c";
                        cssTema(h_sidebar,color_base,letra_color,color_borde);
                        $("#icoLogin").removeClass("fas fa-unlock");
                        $("#icoLogin").addClass("fas fa-lock");
                        $("#frmLogin")[0].reset();
                        $("#loginUsuario").focus();
                    });

                }else{
                        
                            if(status == true){
                                $('#modalContra').modal('show');
                            }
                            else{
                                $("#contentLogin").hide();
                                $("#contentSistema").show();
            
                                persona=dataArray.result.persona;
                                idUsuario=dataArray.result.id_usuario;
                                idDato=dataArray.result.id_dato;
            
                                $("#titular").text(persona);
            
                                $('#sidebar').toggleClass('active');
                                permisos(dataArray.result.permiso_datos_persona,dataArray.result.permiso_ecivil,dataArray.result.permiso_usuario,dataArray.result.permiso_temas);
                                preloader(1,'Asitencia del personal');
                                actividad  ="Ingreso al sistema";
                                log(actividad,dataArray.result.id_usuario);
                                verAsistencias();
                            }
                        
                }
            }else{
                swal({
                    title: "Mensaje!",
                    text: "La contraseña es incorrecta.",
                    type: "error",
                    confirmButtonClass: "btn-dark",
                    confirmButtonText: "Enterado"
                }, function (isConfirm) {
                    $('#changeC').bootstrapToggle('off');
                    $("#btnIngresar").attr("disabled","disabled");
                    $('#changeC').bootstrapToggle('disable');
                    var h_sidebar="#c0392b";
                    var color_base="#e74c3c";
                    var letra_color="#fff";
                    var color_borde="#e74c3c";
                    cssTema(h_sidebar,color_base,letra_color,color_borde);
                    $("#icoLogin").removeClass("fas fa-unlock");
                    $("#icoLogin").addClass("fas fa-lock");
                    $("#frmLogin")[0].reset();
                    $("#loginUsuario").focus();
                });

            }

        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
    
    e.preventDefault();
    return false;
});

//permisoa partes del menu
function permisos(datos,ecivil,usuarios,temas){
    if(datos=='si'){
        $("#liDatos").show();
    }else{
        $("#liDatos").hide();
    }

    if(ecivil=='si'){
        $("#liEcivil").show();
    }else{
        $("#liEcivil").hide();
    }

    if(usuarios=='si'){
        $("#liUsuarios").show();
    }else{
        $("#liUsuarios").hide();
    }

    if(temas=='si'){
        $("#liTemas").show();
    }else{
        $("#liTemas").hide();
    }
}

//Revisa si existe el usuario y aplica el tema del mismo
$("#loginUsuario").keyup(function(){
    valor=$(this).val();
    $.ajax({
        url:"../mLogin/rUsuario.php",
        type:"POST",
        dateType:"json",
        data:{valor},
        success:function(respuesta){
            var dataArray = JSON.parse(respuesta);
            console.log(respuesta);
            var registros=dataArray.cRegistros;
            if (registros !=0 ) {
                //$("#frmLogin").hide();
                idTema=dataArray.result.id_tema;
                aplicarTema(idTema,'login');
                $("#btnIngresar").removeAttr("disabled");
                $('#changeC').bootstrapToggle('enable');
                $("#icoLogin").removeClass("fas fa-lock");
                $("#icoLogin").addClass("fas fa-unlock");
                $("#inicioIdusuario").val(dataArray.result.id_usuario);
                $("#inicioIdDato").val(dataArray.result.id_dato);
                $("#inicioIdTema").val(dataArray.result.id_tema);
                $("#uUser").val(dataArray.result.nombre_usuario);
                $("#uId").val(dataArray.result.id_usuario);
                $("#uIdC").val(dataArray.result.id_usuario);
                //$("#frmLogin").fadeIn();
            }else{
                //colores default
                $("#icoLogin").removeClass("fas fa-unlock");
                $("#icoLogin").addClass("fas fa-lock");
                $("#btnIngresar").attr("disabled","disabled");
                $('#changeC').bootstrapToggle('disable');
                $('#changeC').bootstrapToggle('off');
                var h_sidebar="#2f3640";
                var color_base="#353b48";
                var letra_color="#fff";
                var color_borde="#40739e";
                cssTema(h_sidebar,color_base,letra_color,color_borde);
            }

        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
});

//MOSTRAR LA CONTRASEÑA
$(function(){
    $('#show').click(function(){
        var cambio = document.getElementById("uPassword");
		if(cambio.type == "password"){
			cambio.type = "text";
			$('.icon').removeClass('fas fa-eye').addClass('fas fa-eye-slash');
		}else{
            cambio.type = "password";
            $('.icon').removeClass('fa fa-eye-slash').addClass('fas fa-eye');
		}
	});
});

$("#uPassword").keyup(function(){
    var cantidad,tamaño;
    cantidad =$("#uPassword").val();

    tamaño = cantidad.length;
    if (parseInt(tamaño)>=1) {
        $("#generar").attr('disabled','disabled');
   }
   else{
     $("#generar").removeAttr('disabled');
    }
});

$('#generar').click(function(){
  var long = 8;
  var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
  var contraseña = "";
  for (i=0; i<long; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  $("#uPassword").val(contraseña);
});

$('#uClose').click(function(){
    $("#uPassword").val("");
    $("#loginContra").val("");
    $("#loginContra").focus();
    $('#changeC').bootstrapToggle('off');
  });

/*$(function() {
   function valor(stat){
        var status = $("#changeC").prop('checked');
        fn(status);
   }
  });*/

  $("#frmCambiarC").submit(function(e){

    var usuario    = $("#uId").val();
    var contrasena    = $("#uPassword").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas actualizar su contraseña?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo actualizarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mLogin/actualizarContra.php",
                type:"POST",
                dateType:"html",
                data:{usuario,contrasena},
                success:function(respuesta){
                    $('#modalContra').modal('hide');
                    $("#contentLogin").hide();
                            $("#contentSistema").show();
                            $("#uPassword").val("");
                            name=persona;
                            idUsuario=dataArray.result.id_usuario;
                            idDato=dataArray.result.id_dato;
        
                            $("#titular").text(persona);
        
                            $('#sidebar').toggleClass('active');
                            permisos(dataArray.result.permiso_datos_persona,dataArray.result.permiso_ecivil,dataArray.result.permiso_usuario,dataArray.result.permiso_temas);
                            preloader(1,'Asitencia del personal');
                            actividad  ="Ingreso al sistema";
                            log(actividad,dataArray.result.id_usuario);
                            verAsistencias();
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            $('#changeC').bootstrapToggle('off');
            $("#loginContra").val("");
            $('#modalContra').modal('hide');
            $("#uPassword").val("");
            $("#uId").val("");
        }
      });

    e.preventDefault();
    return false;
});

