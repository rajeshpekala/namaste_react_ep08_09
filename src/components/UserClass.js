import React from "react";

class UserClass extends React.Component{
    constructor(props){
          super(props);

          this.state = {
            userInfo :{
                name : "Something"

            }
            
          }
          //console.log(this.props.name +"Child Constructor");
    }
   async componentDidMount(){
         const data = await fetch("https://api.github.com/users/rajeshpekala");
         const json = await data.json();
         console.log(json);

         this.setState(
            {
                userInfo :json,
            }
         );

       // console.log(this.props.name +"Child componentdidmount");
      }
    render(){
        //console.log(this.props.name+"Child render");
     const {name,location,avatar_url} = this.state.userInfo;  
      
        return (
    
            <div className = "user_card">
                <img src = {avatar_url}/>
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
            </div>
        );
    }
}

export default UserClass;