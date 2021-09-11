import React, { createContext, useEffect, useState } from 'react'
import { getUsers } from '../services/Users';

export const FetchUsersContext = createContext({});

export const FetchUsersProvider = ({children}) => {

    const [users, setUsers] = useState([]);
    const [state, setState] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getUsers().then(res => {
            const resRev = res.reverse();
            setUsers([...resRev]);
            setTimeout(() => {
                setIsLoading(false);
            }, 1500)
        });
    }, [state])

    return (
        <FetchUsersContext.Provider 
            value={{
                setState,
                state,
                users,
                isLoading,
            }}
        >
            {children}
        </FetchUsersContext.Provider>
    )
}