import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/img/dua_swadarma.jpeg';

export const Header = (props) => {
  return (
    <header className="pb-3 mb-3 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <img src={logo} width="50" height="40" className="mx-4" alt="" />
        <span className="fs-4">{props.title} | Perpustakaan Itb_swadarma</span>
      </Link>
    </header>
  );
};
