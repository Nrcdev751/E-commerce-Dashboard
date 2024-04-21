import { RxDashboard } from "react-icons/rx";
import { MdOutlineSell } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";

import { NavLink } from "react-router-dom"

function Sidemenu(){
    return(
        <div className="side-menu p-6">
           
            <NavLink  to="/">
                <div className="sideMenuGroup p-3 flex items-center my-2 rounded-md duration-200 cursor-pointer hover:text-white  hover:bg-blue-600 ">
                    <RxDashboard />
                    <p className="mx-2">Overview</p> 
                </div>    
            </ NavLink>
            <NavLink  to="/Sales">
                <div className="sideMenuGroup p-3 flex items-center my-2 rounded-md duration-200 cursor-pointer hover:text-white  hover:bg-blue-600 ">
                    <MdOutlineSell />
                    <p className="mx-2">Sales Report</p> 
                </div>
            </NavLink>
            <NavLink  to="/Inventory">
                <div className="sideMenuGroup p-3 flex items-center my-2 rounded-md duration-200 cursor-pointer hover:text-white  hover:bg-blue-600 ">
                    <MdOutlineInventory2 />
                    <p className="mx-2"> Inventory</p> 
                </div>
            </NavLink>
            <NavLink  to="/Customer">
                <div className="sideMenuGroup p-3 flex items-center my-2 rounded-md duration-200 cursor-pointer hover:text-white  hover:bg-blue-600 ">
                    <HiOutlineUser />
                    <p className="mx-2"> Customer</p> 
                </div>
            </NavLink>
         
            
            
        </div>
    )
}
export default Sidemenu