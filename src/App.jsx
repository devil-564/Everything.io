
import React from 'react'


import AnimateRoute from "./Component/AnimateRoute";

import { BrowserRouter as Router } from 'react-router-dom';

import CartState from "./context/note/cartState";

function App() {

  // const [categoryItem, setCategoryItem] = useState([])
  // const [items, setItems] = useState({ title: "", description: "", price: "", image: "", rate: "", count: "" });



  // const fetchSpecific = async (url) => {
  //   const res = await fetch(url);
  //   const data = await res.json();

  //   if (data) {
  //     setItems({
  //       title: data.title,
  //       description: data.description,
  //       price: data.price,
  //       image: data.image,
  //       rate: data.rating.rate,
  //       count: data.rating.count
  //     });

  //     console.log(data.rating.rate);
  //   }

  // }

  // useEffect(() => {
  //   fetchSpecific(API);
  // }, []);

  // let props = {
  //   items: items,
  // }


  // const handleOnchange = (e) => {
  //   e.preventDefault();
  // }

  // let [chosenItem, setChosenItem] = useState({ titleI: "", imageI: "", priceI: "", descriptionI: "", rateI: "", countI: "" });


  return (

    <>
      <CartState>
        <Router>
          <AnimateRoute />
        </Router>
      </CartState>
    </>
  )
}

export default App
