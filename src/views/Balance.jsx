import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Balance = () => {
    const location = useLocation();
    const { userId } = location.state
    const [expenses, setExpenses] = useState([]);
    const [income, setIncome] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.all([
                    axios.get("http://localhost:8080/expenses/" + userId),
                    axios.get("http://localhost:8080/incomes/" + userId)
                ]).then(axios.spread((expensesResponse, incomeResponse) => {
                    setExpenses(expensesResponse?.data)
                    setIncome(incomeResponse?.data)
                }));
            }catch (error) {
                console.error("error fetching endpoints, error:", error)
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container text-center">
            <div className="row mt-4">
                <p className="h2">Balance</p>
            </div>

                { expenses.length != 0 && (
                    <div>
                    <div className="row mt-4 text-start">
                        <p className="h4">Gastos</p>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">categoria</th>
                            <th scope="col">cantidad</th>
                            <th scope="col">fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense, index) => (
                              <tr key={index}>
                              <th scope="row">{index}</th>
                              <td>{expense.name}</td>
                              <td>{expense.category}</td>
                              <td>{expense.amount}</td>
                              <td>{expense.date}</td>
                              </tr>  
                            ))}
                            
                        </tbody>
                    </table>
                    </div>
                )}

            { income.length != 0 && (
            <div>
            <div className="row mt-5 text-start">
                <p className="h4">Ingresos</p>
            </div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Concepto</th>
                    <th scope="col">cantidad</th>
                    <th scope="col">fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {income.map((income, index) => (
                      <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{income.reason}</td>
                      <td>{income.amount}</td>
                      <td>{income.date}</td>
                      </tr>  
                    ))}
                    
                </tbody>
            </table>
            </div>
            )}
            
            <div className="row justify-content-md-end mt-4">
                <div className="col-12">
                    <Link className="btn btn-outline-info" state={{userId: userId}} to="/expense_balance">Agrega gasto/ingreso</Link>
                </div>
            </div>
        </div>
    )
}

export default Balance