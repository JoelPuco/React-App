import React, { useContext, useState } from 'react'
import { FetchUsersContext } from '../context/FetchUsers';
import { deleteUser, } from '../services/Users';

const Table = ({ handleEditModalOpen }) => {

    const { users, setState, state, isLoading } = useContext(FetchUsersContext);
    const [currentPage, setCurrentPage] = useState(0);

    //Pagina los usuarios
    const pagUsers = () => {
        return users.slice(currentPage, currentPage + 4);
    }


    //Boton siguiente
    const nextPag = () => {
        if (users.length > currentPage + 4) {
            setCurrentPage(currentPage + 4)
        }
    }

    const prevPag = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 4)
        }
    }

    //Elimina Usuario
    const handleDelete = (user) => {
        console.log(user);
        const ask = window.confirm(`¿Seguro que quiere eliminar este usuario ? \n ${user.id_usuario} - ${user.nombre_usuario} - ${user.cedula_usuario}`);
        if (ask) {
            deleteUser(user.id_usuario);
            setState(!state)

        }
    }

    return (
        <div className='table-responsive-lg'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Cedula</th>
                        <th>Telefono</th>
                        <th>E-mail</th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        isLoading ? <h6 className='animate__animated animate__fadeInDown'> Cargando... </h6>
                            : (
                                pagUsers().map(user => {
                                    return (
                                        <tr key={user.id_usuario} className='animate__animated animate__fadeIn'>
                                            <td>{user.id_usuario}</td> 
                                            <td>{user.nombre_usuario}</td>
                                            <td>{user.cedula_usuario}</td>
                                            <td>{user.telefono_usuario}</td>
                                            <td>{user.mail_usuario}</td>
                                            <td>
                                                <button type="button" className="btn btn-warning mr-1" onClick={() => handleEditModalOpen(user)}>Editar</button>
                                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(user)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                    }
                </tbody>
            </table>
            {
                !isLoading &&
                
                    users.length > 4 &&
                        <div className='btn-pagination'>
                            <button className='btn btn-outline-primary mr-2' onClick={() => prevPag()}>Anterior</button>
                            <button className='btn btn-outline-primary mr-2' onClick={() => nextPag()}>Siguiente</button>
                            <h6>{currentPage} - {users.length > currentPage + 4 ? currentPage + 4 : users.length} / {users.length}</h6>
                        </div>
                
            }
        </div>
    )
}

export default Table
