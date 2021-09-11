export const ValidateForm = (form) => {
    console.log(form);
    //{ nombre_usuario: '', cedula_usuario: '', telefono_usuario: '', mail_usuario: '' }
    if(form.nombre_usuario.length === 0){
        alert('Llene todos los campos');
        return false;
    }

    if(form.cedula_usuario.length === 0){
        alert('Llene todos los campos');
        return false;
    }else if (form.cedula_usuario.length !== 10 ) {
        alert('El numero de cedula debe tener 10 caracteres');
        return false;
    }

    if(form.telefono_usuario.length === 0){
        alert('Llene todos los campos');
        return false;
    }else if (form.telefono_usuario.length !== 10 ) {
        alert('El numero de telefono debe tener 10 caracteres');
        return false;
    }

    if(form.mail_usuario.length === 0){
        alert('Llene todos los campos');
        return false;
    }
    return true;
}