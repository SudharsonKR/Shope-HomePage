import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavebarComps from './Components/NavebarComps';
import ReactStars from "react-rating-stars-component";

 
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
          ];
function App() { 
const [cartCount, setCartCount] = useState(0);
  return (
    <div>
      <NavebarComps/>
      <div>
      <h1>Shopping Cart {cartCount}</h1>
      </div>
      <div className="App">        
      {data.map((food, idx)=>(
      <Outputdata
      key={idx}
      image={food.image}
      name={food.name}
      Price={food.Price}
      cartCount={cartCount}
      setCartCount={setCartCount}  
      />     
      
    ))}
        
    </div>
    </div>
    
  );
 
}

export default App;

function Outputdata({image, name, Price, cartCount, setCartCount}){
  const [show, setShow] = useState(true);
  const handleAddCart = () =>{
    setShow(!show);
    setCartCount(cartCount + 1);
    setCartCount=cartCount + 1;
  };
  const handleRemoveCart = () =>{
    setShow(!show);
    setCartCount(cartCount - 1);
  };

return(  
  <div class="component">
    
    <img src={image} alt={name}/>
    <div>
        <h4>{name}</h4>
    <p>
    <h4>{Price}</h4>
    <button> <ReactStars/></button>
    </p>  
    </div>
     {show ? (<button onClick={handleAddCart}>Add to cart</button>)
    :
    (<button onClick={handleRemoveCart}>Remove cart</button>)
     }
  </div>
  )

}
