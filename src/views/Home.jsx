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
                                {`email: ${user.firstName}`}
                            </div>
                            <span class="badge text-bg-primary rounded-pill">{`Id: ${user.id}`}</span>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="row justify-content-md-end mt-3">
                <div className="col-3">
                    <Link className="btn btn-outline-info" to="/add_user">Agrega un nuevo usuario</Link>
                </div>
            </div>
        </div>
    )
}

export default Home