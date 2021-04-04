import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuIcon from '@material-ui/icons/Menu';


import {
    Nav,
    Navbar,
    NavLink,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,

}
from 'reactstrap';

class NavbarIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false,
            status:"transparent",
            dark:true,
            light:false,
            shadow:"shadow"
        }
    }

    handleClick = () => {
        this.setState({open:!this.state.open});
    }

    componentDidMount() {
        this.listeners = document.addEventListener("scroll",  e => {
            var scrolled = document.scrollingElement.scrollTop;
            if(scrolled > 0) {
                if (this.state.status === "transparent") {
                    this.setState({ status: "white", dark:false, light:true, shadow:"shadow"});
                }
            } else {
                if (this.state.status === "white") {
                    this.setState({ status: "transparent", dark:true, light:false, shadow:"" });
                }
            }
        })
    }
    render() {
        return(
            <div>
                <Navbar expand="md" className="navbarIndex fixed-top" id={this.state.shadow} color={this.state.status} light={this.state.light} dark={this.state.dark} >
                    <NavbarBrand href="/">Warchair React</NavbarBrand>
                    <NavbarToggler onClick={this.handleClick} />
                    <Collapse isOpen={this.state.open} navbar>
                        <Nav className="ml-auto nav-tag" navbar>
                            <NavItem className="ml-3">
                                <NavLink href="">ABOUT</NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink href="">GITHUB</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar className="ml-3">
                                <DropdownToggle nav caret>
                                    MENU
                                </DropdownToggle>
                                <DropdownMenu right className="item-link">
                                    <DropdownItem>
                                        <Link to="/admin">
                                            Dashboard
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/auth/login">
                                            Login
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Link to="/auth/register">
                                            Register
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarIndex;