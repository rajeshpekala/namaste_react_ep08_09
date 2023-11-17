import { LOGO_URL } from "../utils/constants";
import {useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
const [btnname,setBtnname] = useState("login");
const onlinestatus =useOnlineStatus();


// console.log("page rendered");
// useEffect(
//     () => {
//         console.log("useeffect render");
//     },[btnname]
// ); 

    return (
        <div className = "header">
            <div className = "logo-container">
            <img className = "logo" src = {LOGO_URL} alt = "logo" />
            
            </div >
          
            <div className = "nav-items">
                <ul>
                    <li>OnlineStatus:{
                    onlinestatus?("✅"):("🚨") }</li>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to = "/contact">Contact Us</Link></li>
                    <li><Link to = "/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className = "login"
                    onClick={ () => {
                        btnname === "login"?
                     setBtnname("logout"):
                     setBtnname("login");   
                    }}
                    >{btnname}</button>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;