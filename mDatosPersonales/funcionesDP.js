//VARIABLE GLOBAL PARA NOMBRAR LOS ELEMENTOS DE LOS  FORMULARIOS
//DATOS PERSONALES -DP 
var nombreModulo_DP="Datos Personales";

$("#frmGuardar-DP").submit(function(e){

    var clave    = $("#clave").val();
    var nombre    = $("#nombre").val();
    var apPaterno = $("#apPaterno").val();
    var apMaterno = $("#apMaterno").val();
    var fNac      = $("#fNac").val();
    var correo    = $("#correo").val();
    var curp      = $("#curp").val();
    var domicilio = $("#domicilio").val();
    var sexo      = $("#sexo").val();
    var ecivil    = $("#ecivil").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Guardar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo guardarla",
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
                url:"../mDatosPersonales/guardar.php",
                type:"POST",
                dateType:"html",
                data:{clave,nombre,apPaterno,apMaterno,fNac,correo,curp,domicilio,sexo,ecivil},
                success:function(respuesta){
                    
                    $("#guardar-DP").hide();
                    llenar_lista_DP();
                    $("#frmGuardar-DP")[0].reset();
                    selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

$("#frmActualizar-DP").submit(function(e){

    var id        = $("#eId").val();
    var nombre    = $("#eNombre").val();
    var apPaterno = $("#eApPaterno").val();
    var apMaterno = $("#eApMaterno").val();
    var fNac      = $("#eFnac").val();
    var correo    = $("#eCorreo").val();
    var curp      = $("#eCurp").val();
    var clave     = $("#eClave").val();
    var domicilio = $("#eDomicilio").val();
    var sexo      = $("#eSexo").val();
    var ecivil    = $("#eEcivil").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Actualizar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-success",
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
                url:"../mDatosPersonales/actualizar.php",
                type:"POST",
                dateType:"html",
                data:{clave,id,nombre,apPaterno,apMaterno,fNac,correo,curp,clave,domicilio,sexo,ecivil},
                success:function(respuesta){
                    //console.log(respuesta);
                    llenar_lista_DP();
                        $("#frmGuardar-DP")[0].reset();
                        $("#frmActualizar-DP")[0].reset();
                        alertify.success("<i class='fa fa-bolt fa-lg'></i>", 2);
                    $("#btnCancelarG-DP , #btnCancelarA-DP").click();
                    actividad  ="Se ha modificado un registro de la tabla tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
                    
                    $('#nombre').focus();
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

function llenar_lista_DP(){
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-DP")[0].reset();
    $("#Listado-DP").hide();
    $.ajax({
        url:"../mDatosPersonales/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-DP").html(respuesta);
            $("#Listado-DP").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function edad(fecha){
    $.ajax({
        url:"../mDatosPersonales/calcularEdad.php",
        type:"POST",
        dateType:"html",
        data:{fecha},
        success:function(respuesta){

            $("#edad").val(respuesta);
            $("#eEdad").val(respuesta);

            xedad= parseInt(respuesta);
            if (xedad < 0) {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", rojo);
            } else {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", obscuro);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function llenar_formulario_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil){
   
    $("#eId").val(id);
    $("#eClave").val(clave);
    $("#eNombre").val(nombre);
    $("#eApPaterno").val(apPaterno);
    $("#eApMaterno").val(apMaterno);
    $("#eFnac").val(fNac);
    $("#eEdad").val(edad);
    $("#eCorreo").val(correo);
    $("#eCurp").val(curp);
    $("#eClave").val(clave);
    $("#eDomicilio").val(domicilio);
    $("#eSexo").val(sexo);
    $("#eEcivil").val(ecivil);

    selectTwo();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Modificar datos");

    $("#guardar-DP").hide();
    $("#Listado-DP").hide();
    $("#editar-DP").fadeIn();
    $("#eNombre").focus();
}

function cambiar_estatus_DP(id,consecutivo){

    var valor=$("#check"+consecutivo).val();
    var contravalor=(valor==1)?0:1;
    $("#check"+consecutivo).val(contravalor);

    $.ajax({
        url:"../mDatosPersonales/cEstatus.php",
        type:"POST",
        dateType:"html",
        data:{id,contravalor},
        success:function(respuesta){
            // console.log(respuesta);
            if(contravalor==1){
                alertify.success("<i class='fa fa-check fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).removeAttr('disabled');
                $("#btnImprimir-DP"+consecutivo).removeAttr('disabled');
                $("#btnModal-DP"+consecutivo).removeAttr('disabled');
                $("#btnFoto-DP"+consecutivo).removeAttr('disabled');
                $("#btnHorario-DP"+consecutivo).removeAttr('disabled');
                $("#btnSonido-DP"+consecutivo).removeAttr('disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-mute fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-up fa-lg");
                actividad  ="Se ha reactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }else{
                alertify.error("<i class='fa fa-times fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).attr('disabled','disabled');
                $("#btnImprimir-DP"+consecutivo).attr('disabled','disabled');
                $("#btnModal-DP"+consecutivo).attr('disabled','disabled');
                $("#btnFoto-DP"+consecutivo).attr('disabled','disabled');
                $("#btnHorario-DP"+consecutivo).attr('disabled','disabled');
                $("#btnSonido-DP"+consecutivo).attr('disabled','disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-up fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-mute fa-lg");
                actividad  ="Se ha desactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });

}

function abrirModalDatos_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil) {
    $("#modalTitle-DP").text("Datos personales - "+nombre+' '+apPaterno);

    $("#mNombre").val(nombre);
    $("#mApPaterno").val(apPaterno);
    $("#mApMaterno").val(apMaterno);
    $("#mFnac").val(fNac);
    $("#mEdad").val(edad);
    $("#mCorreo").val(correo);
    $("#mCurp").val(curp);
    $("#mClave").val(clave);
    $("#mDomicilio").val(domicilio);
    $("#mSexo").val(sexo);
    $("#mEcivil").val(ecivil);

    selectTwo();

    $("#modalDatos-DP").modal("show");
}


//Manipulacion de eventos con jquery
$("#fNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);
    ;
});

$("#efNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);

});

$("#btnCancelarG-DP , #btnCancelarA-DP").click(function(){
    $("#editar-DP").hide();
    $("#guardar-DP").hide();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Lista");

    $("#Listado-DP").fadeIn();
 
});


$("#clave").keydown(function() {
    var valor=$(this).val();
    soloNumeros(valor);
});

$("#curp , #eCurp").keyup(function() {

    valor=$(this);
    // Convierte en mayuscula
    valor.val(valor.val().toUpperCase());
    
    //validar curp + expresion regular
    if (curpValida(valor.val())=="Si") {
        //$("#btnGuardar-DP").removeAttr('disabled');
        $(valor).css("color", obscuro);
        alertify.success("Curp valida !",1);
    }else{
        //$("#btnGuardar-DP").attr('disabled','disabled');
        $(valor).css("color", rojo);
    }

});

$("#clave").keyup(function(){
    var valor=$(this).val();
    revisar_clave(valor);
});

//Manipulacion de eventos con jquery

//Revisar clave repetida
function revisar_clave(valor){
    $.ajax({
        url:"../mDatosPersonales/rClave.php",
        type:"POST",
        dateType:"html",
        data:{valor},
        success:function(respuesta){
            res =parseInt(respuesta);
            if (res == 0) {
                $("#clave").css("color", obscuro);
            }else{
                $("#clave").css("color", rojo);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

//validar curp
function curpValida(valor) {

    var validador;
    var curp=valor;

    // Expresion regular para curp
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
    
    if (!validado){  //Coincide con el formato general?
        validador = "No";
    }else{
        validador = "Si";
    }
    return validador;
}

//llenar combo
function combo_ecivil()
{
    $.ajax({
        url : '../mDatosPersonales/comboEcivil.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").empty();
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").html(respuesta);    
            selectTwo();
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function nuevo_registro_DP(){
    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-DP").hide();
    $("#guardar-DP").fadeIn();
    $('#frmGuardar-DP')[0].reset();
    $("#clave").focus();
    
}

function abrirModalHorario(id,valorhorario,nombre_user,hLunE,hLunS,hMarE,hMarS,hMierE,hMierS,hJuevE,hJuevS,hVierE,hVierS,hSabE,hSabS,hDomE,hDomS,hTurno) {

    $("#hUser").val(nombre_user);
    $("#hId").val(id);
    //$("#txtTitularFoto").text(nombre);
    $("#tieneD").val(valorhorario);
    if (valorhorario=="No") {
        //$('#modalHorario')[0].reset();
        $("#frmHorario").attr("data-action","agregar");
        $("#hTurno").val('').trigger('change');
        $(".diaH").attr("readonly","readonly");
        $(".diaS").val("");
        $(".diaE").val("");
        $("#hCnHoras").val("");
    }else{
        $("#tieneD").val(valorhorario);
        $("#hLunE").val(hLunE);
        $("#hLunS").val(hLunS);
        $("#hMarE").val(hMarE);
        $("#hMarS").val(hMarS);
        $("#hMierE").val(hMierE);
        $("#hMierS").val(hMierS);
        $("#hJuevE").val(hJuevE);
        $("#hJuevS").val(hJuevS);
        $("#hVierE").val(hVierE);
        $("#hVierS").val(hVierS);
        $("#hSabE").val(hSabE);
        $("#hSabS").val(hSabS);
        $("#hDomE").val(hDomE);
        $("#hDomS").val(hDomS);
        $("#hTurno").val(hTurno).trigger('change');
        $("#frmHorario").attr("data-action","editar");
    }
    
    $("#modalHorario").modal("show");

}

$('#hTurno').on('change',function(){
    var option = $(this).val();
    if(option == 'especial')
    {
        //$(".diaH").attr("disabled","disabled");
        var qDatos = $("#tieneD").val();
        if(qDatos == "No"){
            $(".diaS").val("");
            $(".diaE").val("");
            $("#hCnHoras").val("");
            $("#cH").val('');
        }
        else{
            $("#hCnHoras").val("30 horas");
            $("#cH").val();
        }
        $(".diaH").removeAttr("readonly");
        $(".hSave").attr("disabled","disabled");
        $(".diaS").removeAttr("required");
        $(".diaE").removeAttr("required");
    }
    else if(option == 'matutino'){
        $(".diaH").attr("readonly","readonly");
        $(".hSave").attr("disabled","disabled");
        $(".hEsp").removeAttr("required");
        $(".diaE").val("06:00");
        $(".diaS").val("12:00");
        $(".hEsp").val("");
        $("#hCnHoras").val("30 horas");
        $("#cH").val("30");
        $(".hSave").removeAttr("disabled");
    }
    else if(option == 'vespertino'){
        $(".diaH").attr("readonly","readonly");
        $(".hSave").attr("disabled","disabled");
        $(".hEsp").removeAttr("required");
        $(".diaE").val("12:00");
        $(".diaS").val("18:00");
        $(".hEsp").val("");
        $("#hCnHoras").val("30 horas");
        $("#cH").val("30");
        $(".hSave").removeAttr("disabled");
    }
    else if(option == 'nocturno'){
        $(".diaH").attr("readonly","readonly");
        $(".hSave").attr("disabled","disabled");
        $(".hEsp").removeAttr("required");
        $(".diaE").val("18:00");
        $(".diaS").val("00:00");
        $(".hEsp").val("");
        $("#hCnHoras").val("30 horas");
        $("#cH").val("30");
        $(".hSave").removeAttr("disabled");
    }
});

//Validaciones
$('#hLunS').on('change',function(){
    var tiempo11 = $("#hLunE").val();
    var tiempo12 = $("#hLunS").val();
    if(tiempo12 == "" || tiempo11 == "")
    {

    }
    else{
        if (tiempo12 < tiempo11 ) {
            alertify.error("El horario de salida es mayor que el de entrada", 2);
        }
        else{
            calHoras(tiempo11,tiempo12);
        }
    }
});

$('#hMarS').on('change',function(){
    var tiempo11 = $("#hMarE").val();
    var tiempo12 = $("#hMarS").val();
    if(tiempo12 == "" || tiempo11 == ""){

    }else{
    if (tiempo12 < tiempo11 ) {
        alertify.error("El horario de salida es mayor que el de entrada", 2);
    }
    else{
        calHoras(tiempo11,tiempo12);
    }
}
});

$('#hMierS').on('change',function(){
    var tiempo11 = $("#hMierE").val();
    var tiempo12 = $("#hMierS").val();
    if(tiempo12 == "" || tiempo11 == ""){

    }else{
    if (tiempo12 < tiempo11 ) {
        alertify.error("El horario de salida es mayor que el de entrada", 2);
    }
    else{
        calHoras(tiempo11,tiempo12);
    }
}
});

$('#hJuevS').on('change',function(){
    var tiempo11 = $("#hJuevE").val();
    var tiempo12 = $("#hJuevS").val();
    if(tiempo12 == "" || tiempo11 == ""){

    }else{
    if (tiempo12 < tiempo11 ) {
        alertify.error("El horario de salida es mayor que el de entrada", 2);
    }
    else{
        calHoras(tiempo11,tiempo12);
    }
}
});

$('#hVierS').on('change',function(){
    var tiempo11 = $("#hVierE").val();
    var tiempo12 = $("#hVierS").val();
    if(tiempo12 == "" || tiempo11 == ""){

    }else{
    if (tiempo12 < tiempo11 ) {
        alertify.error("El horario de salida es mayor que el de entrada", 2);
    }
    else{
        calHoras(tiempo11,tiempo12);
    }
}
});

$('#hSabS').on('change',function(){
    var tiempo11 = $("#hSabE").val();
    var tiempo12 = $("#hSabS").val();
    if(tiempo12 == "" || tiempo11 == ""){

    }else{
    if (tiempo12 < tiempo11 ) {
        alertify.error("El horario de salida es mayor que el de entrada", 2);
    }
    else{
        calHoras(tiempo11,tiempo12);
    }
}
});

$('#hDomS').on('change',function(){
    var tiempo11 = $("#hDomE").val();
    var tiempo12 = $("#hDomS").val();
    if(tiempo12 == "" || tiempo11 == ""){

    }else{
    if (tiempo12 < tiempo11 ) {
        alertify.error("El horario de salida es mayor que el de entrada", 2);
    }
    else{
        calHoras(tiempo11,tiempo12);
    }
}
});

function calHoras(entrada,salida) {
        var start = moment.duration(entrada, "HH:mm"),
        end = moment.duration(salida, "HH:mm"),
        diff = end.subtract(start);
        //horas
        var h = diff.hours();
        //minutos
        var m =diff.minutes();
        //duracion
        //var d = moment.duration(diff);
        //formato de horas
        //var s2 = moment.utc(+d).format('HH:mm');

        var contador = $("#hCnHoras").val();
        var conH = $("#cH").val();

        if(conH == "")
        {      
            $("#hCnHoras").val(h + " horas");
            $("#cH").val(h);
        }
        else{
            //formato de horas
           // var w = moment(conH,'HH:mm').add(h, 'hours').add(m,'minutes').format('HH:mm');
            //var w2 = moment(conH,'HH:mm').add(h, 'hours').add(m,'minutes').format('HH');
            var w = parseInt(h) + parseInt(conH);
            //alert(conH);
            if(parseInt(w) >= 30){
                $(".hSave").removeAttr("disabled");
            }
            //var w = moment(conH).add(h, 'hours').add(m,'minutes').format('HH:mm');
            $("#cH").val(w);
            //alert(w);
            $('#hCnHoras').val(w + " horas");
        }

       //alert("Las horas son " + entrada + " y los minutos " + salida);
    }

//Insert Update horarios
$("#frmHorario").submit(function(e){
    //extraer el valor de altributo data action
     var accion = $(this).attr("data-action");
     var nameUser = $("#hUser").val();
     var idUser = $("#hId").val();

    var hLunE    = $("#hLunE").val();
    var hLunS    = $("#hLunS").val();
    var hMarE = $("#hMarE").val();
    var hMarS = $("#hMarS").val();
    var hMierE      = $("#hMierE").val();
    var hMierS    = $("#hMierS").val();
    var hJuevE      = $("#hJuevE").val();
    var hJuevS = $("#hJuevS").val();
    var hVierE      = $("#hVierE").val();
    var hVierS    = $("#hVierS").val();
    var hSabE      = $("#hSabE").val();
    var hSabS    = $("#hSabS").val();
    var hDomE      = $("#hDomE").val();
    var hDomS    = $("#hDomS").val();
    var hTurno    = $("#hTurno").val();

     //esta variable me sirve a donde voy a mandar los datos de ajax
     var url = "";
     var horas = $("#cH").val();
     var actividad = "";
     if(accion == "agregar")
     {
         //que el formulario es para agregar un registro
         url ="../mDatosPersonales/insertHorario.php";
         actividad = "Se ha creado un horario para la persona "+nameUser;
     }
     else if(accion == "editar")
     {
         url="../mDatosPersonales/updateHorario.php";
         actividad = "Se actualizado el horario para la persona "+nameUser;
     }
     //preventDefault = Detiene o cachar la accion por defecto del elemento
     //Enviamos los archivos mediante ajax

     if(parseInt(horas) >= 30){
     $.ajax({
        url:url, //url donde mandare recibir la informacion
        type:"POST", //Tipo de nevio de AJAX
        dataType:"html",//Tipo de dato que voy a recibir
        data: {hLunE,hLunS,hMarE,hMarS,hMierE,hMierS,hJuevE,hJuevS,hVierE,hVierS,hSabE,hSabS,hDomE,hDomS,hTurno,idUser}, //los valores que voy a enviar al archivo URL *serialize sirve para codificar los valores de un formulario en un string para poder enviarlos*
         success:function(respuesta)
         {
             //este codigo se ejecutara mientras la funcion de AJAX sea exitosa
             $('#modalHorario').modal('hide');
             alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
            llenar_lista_DP();
            log(actividad,idUser);
            $("#frmHorario").attr("data-action","agregar");
         },
         error:function(respuesta_error)
         {
             //este codigo se ejecuta cuando la funcion tenga un error
             alert("Ha ocurrido un error");
         }
     });
    }
    else{
        alertify.success("Deben mas de 30 horas laborales", 2);
    }
     e.preventDefault();
     return false;
     
 });
//Aqui termina

function abrirModalFoto(id,clave,nombre,valorfoto) {

    $("#clavePersona").val(clave);
    $("#txtTitularFoto").text(nombre);

    if (valorfoto=="No") {
        $('#formVista').hide();
        $('#formSubida').fadeIn();
        $('#formSubida')[0].reset();
    }else{
        $('#formSubida').hide();
        $('#formVista').fadeIn();
        var archivo='../fotos/'+clave+".jpg";
        $("#imgFoto").attr("src",archivo);
    }
    
    $("#modalFoto").modal("show");

}

function  eliminarFoto(){

    var formData = new FormData();
    var clave=$('#clavePersona').val();
    formData.append('clave',clave);

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas eliminar la foto?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-dark",
        confirmButtonText: "Si deseo eliminarla",
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
                url: '../mDatosPersonales/fotoBorrar.php',
                type: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                  var res=parseInt(response);
                  switch(res){
                    case 0 :
                        alertify.error("<i class='fa fa-times fa-lg'></i> No se encuentra el archivo",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                      break;
                    case 1 :
                        alertify.warning("<i class='fa fa-check fa-lg'></i> Foto Eliminada",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                        break;
                  }
        
                },
                error:function(xhr,status){
                    alertify.error('Error en proceso');
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

}

function subirFoto(){
    var formData = new FormData();

    var files = $('#image')[0].files[0];

    var clave=$('#clavePersona').val();
    var tam=$('#tamanoKB').val();

    formData.append('file',files);
    formData.append('clave',clave);
    formData.append('tam',tam);

    $.ajax({
        url: '../mDatosPersonales/fotoSubir.php',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          var res=parseInt(response);
          switch(res){
            case 0 :
                alertify.success("<i class='fas fa-file-upload'></i>",1);
                $("#modalFoto").modal("hide");
                llenar_lista_DP();
              break;
            case 1 :

                swal({
                    title: "Error!",
                    text: "No ha sido posible cargar el archivo debido a que este debe de tener extención jpg y no debe de sobrepasar los 3 megabytes",
                    type: "error",
                    confirmButtonClass: "btn-dark",
                    confirmButtonText: "Enterado"
                }, function (isConfirm) {
                    alertify.message("Gracias !");
                });
              break;
            default:
                  alertify.error("<i class='fa fa-times fa-lg'></i>",1);
          }

        },
        error:function(xhr,status){
            alertify.error('Error en proceso');
        },
    });
// return false;
}


