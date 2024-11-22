import React, { useEffect, useState } from 'react';
import style from '../styles/layout/Nabvar.module.css';
import logo from '../public/img/Logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const Links = [
    {
        name: "Comentarios",
        href: "/opinion" 
    },
    {
        name: "¿Quiénes somos?",
        href: "/InformationCompany"
    },
    {
        name: "Requisitos",
        href: "/Requirements"
    },
    {
        name: "Inciar sesión",
        href: "/Login"
    },
    {
        name: "Registrarse",
        href: "/Register"
    }
];

const AdminLink = [
    {
        name: "Inicio",
        href: "/Pets"
    },
    {
        name: "Comentarios",
        href: "/opinion"
    } 
];

const UserLink = [
    {
        name: "Inicio",
        href: "/Pets"
    },
    {
        name: "Cuidados",
        href: "/car"
    },
    {
        name: "Comentarios",
        href: "/opinion"
    } 
];

const Navbar = () => {

    const [user, setUser] = useState(null);
    const [authority, setAuthority] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userResponse = JSON.parse(storedUser);
            setUser(userResponse.userProfile);
            setAuthority(userResponse.authorities[0].authority);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setAuthority(null);
        navigate('/');
        window.location.reload();
    };

    return (
        <header>
            <a href="/" className={style.logo}>
                <img src={logo} alt="Logo" width="400px" />
                <span></span>
            </a>
            <nav className={style.navbar}>
                {user ? (
                    <Nav className="justify-content-end" variant="underline">
                    {authority === 'ADMIN' ? (
                        AdminLink.map((x) => (
                            <Nav.Item key={x.href}>
                                <Nav.Link href={x.href} eventKey={x.href}>
                                    {x.name}
                                </Nav.Link>
                            </Nav.Item>
                        ))                        
                    ) : (
                        UserLink.map((x) => (
                            <Nav.Item key={x.href}>
                                <Nav.Link href={x.href} eventKey={x.href}>
                                    {x.name}
                                </Nav.Link>
                            </Nav.Item>
                            ))
                    )}
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title={`${user.first_name} ${user.last_name}`}
                        align="end"
                    >
                        <NavDropdown.Item onClick={handleLogout}>
                            Cerrar Sesión
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                ) : (
                    <Nav className="justify-content-end" variant="underline">
                        {Links.map((x) => (
                            <Nav.Item key={x.href}>
                                <Nav.Link href={x.href} eventKey={x.href}>
                                    {x.name}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                )}
            </nav>
        </header>
    );    
};

export default Navbar;
