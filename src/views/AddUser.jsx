import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const onChangeValue = (e) => {
        const { name, value } = e.target;
        setUserData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        console.log('forms:', userData)
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/user', userData);
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <div className="container text-left">
            <div className="row mt-4">
                <p className="h2">Agrega un nuevo usuario</p>
            </div>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="username" className="form-label">Nombre</label>
                        <input name="firstName" type="text" value={userData.firstName} onChange={onChangeValue} className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                        <label for="lastname" className="form-label">Apellido</label>
                        <input name="lastName" type="text" value={userData.lastName} onChange={onChangeValue} className="form-control" id="lastname" />
                    </div>
                    <div classname="mb-3">
                        <label for="email" className="form-label">Correo</label>
                        <input name="email" type="email" value={userData.email} onChange={onChangeValue} className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Telefono</label>
                        <input name="phone" type="text" value={userData.phone} onChange={onChangeValue} className="form-control" id="phone" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser