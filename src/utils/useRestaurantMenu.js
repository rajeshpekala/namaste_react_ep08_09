import { MENU_URL } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const  [rmenu,setRmenu] = useState(null);

  
        useEffect(() => {
            fetchMenu();
        },[]);
        
        
        
        const fetchMenu = async () =>{
        const data = await fetch(MENU_URL +resId);
        const jsonValue = await data.json();
        
        setRmenu(jsonValue.data);
        
        }
      return rmenu;  
    
};

export default useRestaurantMenu;