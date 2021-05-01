import React, { useContext } from 'react';
import './Header.css';
import { Jumbotron, Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Header = ({handleLogOut}) => {
	const [loggedInUser] = useContext(userContext);
    return (
        <div className="header">			
            
            <Navbar bg="dark" variant="dark">
				<Navbar.Brand><Link className="myLink" to="/">HSE</Link></Navbar.Brand>
				<Nav className="mr-auto">
				<Nav.Link><Link className="myLink" to="/private">Private</Link></Nav.Link>
				<Nav.Link>
				{loggedInUser.isLoggedIn ? <Link className="myLink" onClick={handleLogOut}>Logout</Link> : <Link className="myLink" to='/login'>Login</Link>}
				</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
		</div>
    );
};

export default Header;