import React, {useState} from 'react'; 
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import NotificationsIcon from '@material-ui/icons/Notifications';

const OtherDropdown = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return(
        <div>
            <UncontrolledDropdown className="ml-3 nav inNavbar">
                <DropdownToggle nav caret className="bg-transparent">
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem >Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    )
}

export default OtherDropdown;