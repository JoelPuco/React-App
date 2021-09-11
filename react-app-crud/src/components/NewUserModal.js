import React, { useContext, useState } from 'react'
import { FetchUsersContext } from '../context/FetchUsers';
import { ValidateForm } from '../helpers/ValidateForm';
import { createNewUser } from '../services/Users';

const NewUserModal = ({ setModalUser, modalUser }) => {

    const { state, setState } = useContext(FetchUsersContext)

    //Estado inicial de formulario
    const formInit = {
        nombre_usuario: '',
        cedula_usuario: '',
        telefono_usuario: '',
        mail_usuario: ''
    }
    //Estado de formulario 
    const [form, setForm] = useState(formInit);
    //Cierra el modal 
    const handleModalClose = () => {
        setModalUser(false);
        setForm(formInit);
    };

    //Registra el nuevo usuario
    const handleRegister = (e) => {
        e.preventDefault();
        if(ValidateForm(form)){
            createNewUser(form).then(res => {
                setForm(formInit);
                setModalUser(false);
                setState(!state);
            });
        }
    }

    //Recoge los cambios de los input
    const onChangeForm = (e, name) => {
        const value = e.target.value;
        setForm({ ...form, [name]: value })

    }

    return (
        <div
            hidden={!modalUser}
        >
            <div
                className="modal-background"
            >
                <div className="modal-card">
                    <button className='btn btn-dark' style={{ position: 'absolute', right: 10, top: 10 }}
                        onClick={() => handleModalClose()}
                    >
                        X
                    </button>
                    <div className='m-4'>
                        <h5>Datos del nuevo usuario</h5>
                        <form className='mt-4'>
                            <input className='form-control mt-1' placeholder='Nombre'
                                value={form.nombre_usuario}
                                onChange={(e) => onChangeForm(e, 'nombre_usuario')}
                            />
                            <input className='form-control mt-1' placeholder='Cedula'
                                value={form.cedula_usuario}
                                onChange={(e) => onChangeForm(e, 'cedula_usuario')}

                            />
                            <input className='form-control mt-1' placeholder='Telefono'
                                value={form.telefono_usuario}
                                onChange={(e) => onChangeForm(e, 'telefono_usuario')}
                            />
                            <input className='form-control mt-1' placeholder='Email'
                                value={form.mail_usuario}
                                onChange={(e) => onChangeForm(e, 'mail_usuario')}
                            />
                            <button className='btn btn-success mt-3' onClick={(e) => handleRegister(e)}> Registrar </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUserModal
