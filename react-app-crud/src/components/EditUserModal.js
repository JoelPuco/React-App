import React, { useContext, useEffect, useState } from 'react'
import { FetchUsersContext } from '../context/FetchUsers';
import { editUser, getUser } from '../services/Users';

const EditUserModal = ({ setModalEditUser, modalEditUser, userSelect, setUserSelect }) => {

    const { state, setState } = useContext(FetchUsersContext)
    //Estado de formulario 
    const [form, setForm] = useState({});

    //Estado Cargando datos
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (userSelect !== 0) {
            getUser(userSelect).then(res => {
                setForm({ ...res })
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);
            });
        }

    }, [userSelect])

    //Cierra el modal 
    const handleEditModalClose = () => {
        setModalEditUser(false);
        setForm({});
        setIsLoading(true);
        setUserSelect(0);
    };

    //Registra el nuevo usuario
    const handleSaveChange = (e) => {
        e.preventDefault();
        editUser(userSelect, form).then(res => {
            setForm({});
            setModalEditUser(false);
            setIsLoading(true);
            setState(!state);
            setUserSelect(0);
        });
    }

    //Recoge los cambios de los input
    const onChangeForm = (e, name) => {
        const value = e.target.value;
        setForm({ ...form, [name]: value })
        //console.log(form);

    }

    return (
        <div
            hidden={!modalEditUser}
        >
            <div
                className="modal-background"
            >
                <div className="modal-card">
                    <button className='btn btn-dark' style={{ position: 'absolute', right: 10, top: 10 }}
                        onClick={() => handleEditModalClose()}
                    >
                        X
                    </button>
                    <div className='m-4'>
                        <h5>Editar campos del usuario</h5>
                        {
                            isLoading ? <h6 className='animate__animated animate__pulse' >Cargando datos de usuario...</h6>
                                :
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
                                    <button className='btn btn-success mt-3' onClick={(e) => handleSaveChange(e)}>Guardar Cambios</button>
                                </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUserModal
