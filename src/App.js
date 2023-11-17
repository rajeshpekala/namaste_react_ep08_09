import React,{Suspense, lazy} from "react"
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AppBody from "./Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(()=> import("./components/Grocery"))

const Application = () => {
    return (
        <div className = "app">
            <Header/>
            <Outlet/>
            <Footer/>

        </div>

    );
};

const appRouter = createBrowserRouter([
    { path : "/",
      element: <Application/>,
      children:
      [
        { path :"/",
        element: <AppBody/>,
       
      },

        { path :"/about",
      element: <About/>,
   
    },
    
    { path :"/contact",
      element: <Contact/>,
     
    },
    { path :"/grocery",
    element: <Suspense fallback ={<h1>Loading...</h1>}><Grocery/></Suspense>,
   
  },

    { path :"/restaurants/:resId",
    element: <RestaurantMenu/>,
  }
      ],

     errorElement: <Error/>
    }, 

    
]

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter}/>);