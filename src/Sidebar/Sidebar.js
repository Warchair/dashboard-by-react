import React from 'react';
import { SidebarData }  from '../Component/Data/sidebarData';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            active:false
        }
    }

    handleClick() {
        this.setState({active:!this.state.active});
        console.log(this.state.active);
    }
    render() {
        return(
            <>
                <div id="burger"
                className={this.state.active === false ? "d-block position-absolute" : "d-block position-fixed"} onClick={this.handleClick}> 
                    {this.state.active === false ? <MenuIcon fontSize="large" className="m-2 open" /> : <CloseIcon fontSize="large" className="m-2 close" /> }
                    
                </div>
                <div className={this.state.active === true ? "activity Sidebar " : "Sidebar"}>
                    <h2 className="text-center" >Warchair React</h2>
                    <div className="line"></div>
                    <ul >
                        {SidebarData.map((val,key) => {
                            return(
                                <li 
                                key={key}
                                className="p-1 mx-auto"
                                >
                                    <NavLink
                                    id={window.location.href.indexOf(val.layout + val.location) !== -1 ? "active-el" : ""}
                                    to={val.layout + val.location}
                                    // className=""
                                    >
                                        <span className="icon">{val.icon}</span>
                                        <span  className="title">{val.title}</span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }
}

export default Sidebar;
