module.exports = {
    FUNCIONES_USUARIO: `CALL SP_USER_GLOBAL(:accion,:idPersona,:primerNombre,
        :segudoNombre,:primerApellido,:segundoApellido,
        :nombreCompleto,:tipoDocumento, :numeroDocumento, 
        :fechaNacimiento, :edad, :numeroCelular, 
        :direccion, :genero, :idUsuario, 
        :nomUsuario, :passUsuario, :email,
        :origen, :estadoUsuario);`,
        OBTENER_TIPO_DOCUMENTO: `SELECT * FROM tipo_doc`,
        OBTENER_TIPO_GENERO: `SELECT * FROM tipo_genero`
};
