import Restaurant from "./components/Restaurant";
import { useState,useEffect } from "react";
import Shimmer from "./components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";


const AppBody = () => {
    const [ListofRestaurant,setListofRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const[Filteredlist,setFilteredlist] = useState([]);
    console.log("render");

    useEffect(() =>{
      fetchdata();
    },
    []
    );
    
    const fetchdata = async () => {
        const data = await 
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonvalue = await data.json();
        
        setListofRestaurant(jsonvalue?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredlist(jsonvalue?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    
    const onlinestatus = useOnlineStatus();
    if (onlinestatus === false)
   return (<h1>You are Offline</h1>)
    ///u need to use to return to get render in react
    
    if (!ListofRestaurant || ListofRestaurant.length === 0) {
        return <Shimmer />;
      }

   


    return(
        
        <div className = "appbody">

            <div>
            <input
            className="search_bar"
             type="text"
             placeholder="Search restaurants..."
             value = {searchText}
             onChange={ (e) => {
              setSearchText(e.target.value);
             }
            }
                  />
                  <button
                  onClick={() =>{
                    
                    const list1 = ListofRestaurant.filter((val) =>
              val.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredlist(list1);
                  
                  }}
                  >Find Restaurants</button>
            </div>
            <div className = "sear">
                <button className = "butter" type = "button"
                onClick={ ()=>{
                    
                    const filteredList = ListofRestaurant.filter(
                       (res) => 
                         res.info.avgRating > 4.0   
                    );
                    setFilteredlist(filteredList);
                }} 

                >TopRated</button>
            </div >
            <div className = "restaurant">
        {Filteredlist.map((restaurant) =>  (
       <Link
       className = "resline"
       key ={restaurant.info.id}
       to ={"/restaurants/"+restaurant.info.id}>
        <Restaurant resdata = {restaurant}/>
        </Link> 
        )
        )}
            
        </div>
        </div>

    );
};

export default AppBody;