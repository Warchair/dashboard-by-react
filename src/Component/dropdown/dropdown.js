import React, {useState} from 'react'; 
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const UserDropdown = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return(
        <div>
            
        </div>
    )
}

export default UserDropdown;