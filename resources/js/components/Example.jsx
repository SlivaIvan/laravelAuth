import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfo() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/user-info')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Ошибка загрузки данных пользователя', error);
            });
    }, []);

    if (!user) return <div>Загрузка...</div>;

    return (
        <div>
            <h2>Информация о пользователе</h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Имя:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
}

export default UserInfo;
