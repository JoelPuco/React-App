import React, { useState } from 'react'
import EditUserModal from './EditUserModal';
import NewUserModal from './NewUserModal'
import Table from './Table'

function Content() {

    //Estado de Modal de Nuevo Usuario
    const [modalUser, setModalUser] = useState(false);
    
    //Estado de modal editar usuario
    const [modalEditUser, setModalEditUser] = useState(false);
    
    //Estado de usuario seleccionado
    const [userSelect, setUserSelect] = useState(0);

    const handleModalOpen = () => {
        setModalUser(true);
    };

    
    const handleEditModalOpen = (user) => {
        setModalEditUser(true);
        setUserSelect(user.id_usuario);
    };
    return (
        <div className='m-3'>
            <div className='card card-body border-info' style={{ boxShadow: '1px 2px 7px #121212' }}>
                <h4>Usuarios</h4>
                <div >
                    <button className='btn btn-primary mt-2 mb-2 btn-add-user'
                        onClick={() => handleModalOpen()}
                    >
                        Agregar Usuario
                    </button>
                    <NewUserModal
                        setModalUser={setModalUser}
                        modalUser={modalUser}
                    />
                </div>
                <Table 
                    handleEditModalOpen={handleEditModalOpen}
                    userSelect={userSelect}
                    setUserSelect={setUserSelect}
                />
                <EditUserModal 
                    modalEditUser={modalEditUser}
                    setModalEditUser={setModalEditUser}
                    userSelect={userSelect}
                    setUserSelect={setUserSelect}
                />
            </div>
        </div>
    )
}

export default Content
