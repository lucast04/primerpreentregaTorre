import React from 'react';

const Categorias = () => {
    return (
        <>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className='btn btn-dark'>OPCIONES</button>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">BURGERS</a></li>
            <li><a className="dropdown-item" href="#">BEBIDAS</a></li>
            <li><a className="dropdown-item" href="#">TAPEOS</a></li>
          </ul>
        </li>
        </>
    );
}

export default Categorias;
