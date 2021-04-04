// icon element
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';
import TableChartIcon from '@material-ui/icons/TableChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalMallIcon from '@material-ui/icons/LocalMall';


// component in sidebar
import Dashboard from '../../view/AdminComponent/dashboard';
import Settings from '../../view/AdminComponent/settings';
import Product from '../../view/AdminComponent/product';
import Tables from '../../view/AdminComponent/table';
import Profile from '../../view/AdminComponent/profile';

export const SidebarData = [
    {
        title:"Dashboard",
        layout:"/admin",
        location:"/dashboard",
        icon:<DashboardIcon/>,
        component:Dashboard
    },
    {
        title:"Tables",
        layout:"/admin",
        location:"/tables",
        icon:<TableChartIcon/>,
        component:Tables

    },
    {
        title:"Product",
        layout:"/admin",
        location:"/product",
        icon:<LocalMallIcon/>,
        component:Product
    },
    {
        title:"Profile",
        layout:"/admin",
        location:"/profile",
        icon:<AccountCircleIcon/>,
        component:Profile

    },
    {
        title:"Settings",
        layout:"/admin",
        location:"/settings",
        icon:<SettingsIcon/>,
        component:Settings
    }
]