import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavebarComps from './Components/NavebarComps';
import ReactStars from "react-rating-stars-component";
function App() {
  
  const data=[{
      image: "https://i.ytimg.com/vi/oEKW85qQNxg/sddefault.jpg",
      name: "Cauliflower chilli",
      Price: "₹50.00"
    },
      {
          image: "https://static-ai.asianetnews.com/images/01gv7c2cpq1vkha5at52zq14sh/mushroom-chukka-710x400_1200x630xt.jpg",
          name: "Mushroom chukka",
          Price: "₹80.00"
        },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasXVDZgcGlHR_310u5EmwjL07BGq6ka6Vtg&usqp=CAU",
            name: "Fish Fry",
            Price: "₹200.00"},
            {
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoH_z-T9Upeoa8xDJ5hIvfIq8RhZjOMQkFw&usqp=CAU",
              name: "Chicken Fry",
              Price: "₹150.00"}
          ]

  return (
    <div>
      <NavebarComps/>
      <div>
      <h1>Shopping Cart</h1>
      
          
      <div className="App">
      {data.map((food, idx)=>(
      <Outputdata
      key={idx}
      image={food.image}
      name={food.name}
      Price={food.Price}
      />     
      
    ))}
        </div>
    </div>
    </div>
    
  );
 
}

export default App;

function HandleClick(){
return(
<button disabled={false}>Add</button>
)
};


function Outputdata(props){
  // const data={
  //   image: "https://w7.pngwing.com/pngs/407/726/png-transparent-cartoon-school-cartoon-child-child-photography-hand-thumbnail.png",
  //   name: "ram",
  //   course: "FSD-mern"
  
  // };
return(
  
  <div class="component">
    
    <img src={props.image} alt={props.name}/>
    <h4>{props.name}</h4>
    <h4>{props.Price}</h4>
    <div>
    <button onClick={HandleClick}>Add</button>
     <br/>
     <br/>
     <button> <ReactStars/></button>

    </div>
  </div>
  
)

}
