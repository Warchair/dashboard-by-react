import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import SearchIcon from '@material-ui/icons/Search';
import UserDropdown from '../dropdown/dropdown';
// import OtherDropdown from '../dropdown/dropdown2';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';


class NavbarDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open:false,
            opendropdown:false,
            color:"transparent"
        }

    }

    OpenNavbar = () =>  {
        this.setState({
            open:!this.state.open
        })
    }

    OpenDropdown = () => {
        this.setState({
            opendropdown:!this.state.opendropdown
        })
    }

    updateColor = () => {
        if(window.innerWidth > 768 && this.state.open === true) {
            this.setState({
                color:"white",
                open:!this.state.open
            })
        } else {
            this.setState({
                color:"transparent"
            })
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateColor.bind(this));
    }

    render() {
        return(
            <div>
                <Navbar color={this.state.open === true ? "white" : this.state.color }  className="nav-dashboard" expand="md">
                    <NavbarBrand></NavbarBrand>
                    <MoreVertIcon onClick={this.OpenNavbar} className={this.state.open === false ? "d-lg-none d-md-none text-white" : "d-lg-none d-md-none text-black"  } />
                    <Collapse isOpen={this.state.open} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="mr-2">
                            <NavLink>
                                <div class="input-group ">
                                    <input type="text" placeholder="Search..." />
                                    <button className="search">
                                        <SearchIcon/>
                                    </button>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem className="my-auto mr-2" >
                            <Dropdown isOpen={this.state.opendropdown} toggle={this.OpenDropdown} direction="down" inNavbar >
                            <DropdownToggle nav className="d-toggle p-2" >
                                    <NotificationsIcon />
                                    <span className="ml-2 d-lg-none d-md-none d-sm-inline">NOTIFICATIONS</span>
                            </DropdownToggle>
                            <DropdownMenu right color="dark" dark>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem >Action</DropdownItem>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <NavItem className="my-auto mr-2 n-item">
                                <NavLink className="logout p-2">    
                                    <ExitToAppIcon/>                                    
                                    <span className="ml-2 d-lg-none d-md-none d-sm-inline">LOGOUT</span>
                                </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarDashboard;