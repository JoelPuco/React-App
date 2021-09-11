const URL_API = 'http://127.0.0.1:8000/api'

//Crea un usuario
export const createNewUser = async (data) => {

    const url = `${URL_API}/usuario`;

    const request = await fetch(url, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json',
        },
        'body': JSON.stringify(data),
    });

    const response = request.json();

    return response;

}

//Muestra los datos de los usuarios
export const getUsers = async () => {

    const url = `${URL_API}/usuario`;

    const request = await fetch(url, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
        },
    });

    const response = request.json();

    return response;

}

//Muestra los datos de un usuario
export const getUser = async (id_usuario) => {

    const url = `${URL_API}/usuario/${id_usuario}`;

    const request = await fetch(url, {
        'method': 'GET',
        'headers': {
            'Content-Type': 'application/json',
        },
    });

    const response = request.json();

    return response;

}

//Elimina a un usuario
export const deleteUser = async (id_usuario) => {

    const url = `${URL_API}/usuario/${id_usuario}`;

    const request = await fetch(url, {
        'method': 'DELETE',
        'headers': {
            'Content-Type': 'application/json',
        },
    });

    const response = request.json();

    return response;
}

//Editar un usuario
export const editUser = async (id_usuario, data) => {

    console.log('id usuario de ediUser', id_usuario);
    console.log('data de ediUser', data);
    const url = `${URL_API}/usuario/${id_usuario}`;

    const request = await fetch(url, {
        'method': 'PUT',
        'headers': {
            'Content-Type': 'application/json',
        },
        'body': JSON.stringify(data)
    });

    const response = request.json();

    return response;
}
