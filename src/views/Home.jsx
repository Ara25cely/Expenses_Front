import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/users');
                setUsers(response?.data);
            } catch (error) {
                console.error("error fetching users, error:", error)
            }
        };

        fetchData();
    }, []);

    console.info("data", users)
    if (users.length === 0) return null

    return (
        <div className="container text-center">
            <div className="row mt-4">
                <p className="h2">Lista de usuarios</p>
            </div>
            <div className="row">
                <ol class="list-group list-group-numbered">
                    {users.map((user, index) => (

                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">{`Usuario: ${user.firstName}`}</div>
                                {`email: ${user.email}`}
                            </div>
                            <Link className="btn btn-outline-success me-2" state={{userId: user.id}} to="/balance">Ver balance</Link>                
                            <Link className="btn btn-outline-warning" to="/add_user">Editar</Link>  
                        </li>
                    ))}
                </ol>
            </div>

            <div className="row justify-content-md-end mt-4">
                <div className="col-2">
                    <Link className="btn btn-outline-info" to="/add_user">Agrega un nuevo usuario</Link>
                </div>
            </div>
        </div>
    )
}

export default Home