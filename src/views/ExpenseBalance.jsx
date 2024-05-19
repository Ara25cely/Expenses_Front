import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ExpenseBlance = () => {
    const location = useLocation();
    const { userId } = location.state

    const navigate = useNavigate()

    const [expenseData, setExpenseData] = useState({
        name: "",
        category: "",
        amount: "",
        date: ""
    });

    const [incomeData, setIncomeData] = useState({
        reason: "",
        amount: "",
        date: ""
    });

    const onExpenseChangeValue = (e) => {
        const { name, value } = e.target;
        setExpenseData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const onIncomeChangeValue = (e) => {
        const { name, value } = e.target;
        setIncomeData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleExpenseSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("expense data to be sent",expenseData)
            const response = await axios.post('http://localhost:8080/expense/' + userId, expenseData);
            console.log('Data sent successfully:', response.data);
            navigate(-1)
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleIncomeSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/income/' + userId, incomeData);
            console.log('Data sent successfully:', response.data);
            navigate(-1)
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <div className="container text-center">
            <div className="row mt-4">
                <p className="h2">Gastos / Ingresos</p>
            </div>
            <div className="row">
            <div className="col">
            <div className="container text-center mt-4">
            <p className="h4">Gastos</p>
            </div>
            <div className="row">
                <form onSubmit={handleExpenseSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input name="name" type="text" value={expenseData.name} onChange={onExpenseChangeValue} className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Categoria</label>
                        <input name="category" type="text" value={expenseData.category} onChange={onExpenseChangeValue} className="form-control" id="category" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Cantidad</label>
                        <input name="amount" type="number" value={expenseData.amount} onChange={onExpenseChangeValue} className="form-control" id="amount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Fecha</label>
                        <input name="date" type="date" value={expenseData.date} onChange={onExpenseChangeValue} className="form-control" id="date" />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
            </div>
            <div className="col">
            <div className="container text-center mt-4">
            <p className="h4">Ingresos</p>
            </div>
            <div className="row">
                <form onSubmit={handleIncomeSubmit}>
                    <div className="mb-3">
                        <label htmlFor="reason" className="form-label">Motivo</label>
                        <input name="reason" type="text" value={incomeData.reason} onChange={onIncomeChangeValue} className="form-control" id="reason" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="incomeAmount" className="form-label">Cantidad</label>
                        <input name="amount" type="number" value={incomeData.amount} onChange={onIncomeChangeValue} className="form-control" id="incomeAmount" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="incomeDate" className="form-label">Fecha</label>
                        <input name="date" type="date" value={incomeData.date} onChange={onIncomeChangeValue} className="form-control" id="incomeDate" />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
            </div>
            </div>
            

            
        </div>
    )
}

export default ExpenseBlance