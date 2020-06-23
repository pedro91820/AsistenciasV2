var nombreModulo_TS="Temas";

function llenar_lista_TS(){
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-TS")[0].reset();
    $("#Listado-TS").hide();
    $.ajax({
        url:"../mTemas/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-TS").html(respuesta);
            $("#Listado-TS").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function llenar_formulario_TS(id,nombre,letra,base,basefuerte,borde){
   
    $("#eId").val(id);
    $("#enombre").val(nombre);
    $("#eletra").val(letra);
    $("#ebase").val(base);
    $("#ebase_fuerte").val(basefuerte);
    $("#eborde").val(borde);

    $("#lblTitular").text(nombreModulo_TS);
    $("#badgeInfo").text("Modificar datos");

    $('#eletra').colorpicker({"color": letra});
    $('#ebase').colorpicker({"color": base});
    $('#ebase_fuerte').colorpicker({"color": basefuerte});
    $('#eborde').colorpicker({"color": borde});

    $("#guardar-TS").hide();
    $("#Listado-TS").hide();
    $("#editar-TS").fadeIn();
    $("#enombre").focus();
}

function nuevo_registro_TS(){
    $("#lblTitular").text(nombreModulo_TS);
    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-TS").hide();
    $("#guardar-TS").fadeIn();
    $('#frmGuardar-TS')[0].reset();
    $("#nombre").focus();
    
}

function abrirModalImportar(){
    $("#modalTema").modal("show");
}


$("#btnCancelarG-TS , #btnCancelarA-TS").click(function(){
    $("#editar-TS").hide();
    $("#guardar-TS").hide();

    $("#lblTitular").text(nombreModulo_TS);
    $("#badgeInfo").text("Lista");

    $("#Listado-TS").fadeIn();
 
});