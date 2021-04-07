import React from 'react'
export interface User {
    id: number,
    name: string,
    company: Company,
}

export interface Company {
    name: string,
    position: string,
}

const users = [
    {
        id: 1,
        name: 'Nhu',
        company: {
            name: 'PYCOGroup',
            position: 'React intern'
        }      
    }, 
    {
        id: 2,
        name: 'Nhung',
        company: {
            name: 'PYCOGroup',
            position: 'Java intern'
        }      
    }, 
]
    
const User = () => {
    
    const showAlert = (user: User) => {
        console.log(user);
    };

    return (
        <ul>
            <p>TypeScript:</p>
            {
                users.map((user: User) => {
                    return (
                        <p onClick={() => showAlert(user)}>{user.name}</p>
                    )
                })
            }
        </ul>
    );
}

export default User;