import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
        <div className="container text-center">
          <div className="row mb-4">
            <div className="col">
               <h1 className="display-4">Bienvenido a Expenses</h1>
              <p className="lead">Gestiona tus gastos de manera sencilla y eficiente.</p>
              <p className="lead">Con Expenses, puedes:</p>
              <ul className="list-unstyled lead">
                <li>📈 Monitorizar tus gastos</li>
                <li>💰 Crear presupuestos personalizados</li>
                <li>📊 Generar informes financieros detallados</li>
              </ul>
            </div>
            <div>
                <Link className="btn btn-outline-info" state={{shouldGoForward: true}} to="/add_user">Accede a expeses</Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-emoji-smile mb-3 text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm4 3a3.5 3.5 0 0 0 3-1.5.5.5 0 1 1 .832.555A4.5 4.5 0 0 1 8 12a4.5 4.5 0 0 1-3.832-1.945.5.5 0 1 1 .832-.555A3.5 3.5 0 0 0 8 11z" />
                <path d="M7 6.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S5.552 5 6 5s1 .672 1 1.5zM11 6.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.552 5 10 5s1 .672 1 1.5z" />
              </svg>
              <h3>Fácil de Usar</h3>
              <p>Diseñado con una interfaz amigable para una fácil navegación.</p>
            </div>
            <div className="col-md-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-laptop mb-3 text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M12 3H4a1 1 0 0 0-1 1v7H1.5A1.5 1.5 0 0 0 0 12.5v.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-.5A1.5 1.5 0 0 0 14.5 11H13V4a1 1 0 0 0-1-1zm-9 1h8v7H3V4zM1.5 12h13a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5z" />
              </svg>
              <h3>Diseño Moderno</h3>
              <p>Disfruta de un diseño moderno que mejora tu experiencia de usuario.</p>
            </div>
            <div className="col-md-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-phone mb-3 text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-6 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V1z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <h3>Responsivo</h3>
              <p>Nuestra aplicación es totalmente responsiva y funciona en todos los dispositivos.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Welcome