import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {


  const {resId} = useParams(); 
  const rmenu = useRestaurantMenu(resId);

if(rmenu === null){
    return <Shimmer/>;
}
const {name,cuisines,avgRating,costForTwo} =rmenu?.cards[0]?.card?.card?.info;
const {itemCards} = rmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;
console.log(itemCards);


    return (
        <div className = "resmenu" >
         <h1>{name}</h1>
         <h3>{cuisines}</h3>
         <h2>Menu</h2>
         <h3>{avgRating}</h3>
         <h3>{costForTwo/100}</h3>
            
            <ul>
                {itemCards && itemCards.map(item =>
                <li key = {item?.card?.info?.id} >
                    {item?.card?.info?.name}-
                Rs{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
              <img className = "resim" src ={CDN_URL + item?.card?.info?.imageId} />
                </li>)}
               
            </ul>

        </div>
    )
}

export default RestaurantMenu;