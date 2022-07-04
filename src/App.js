import './App.css';
import items from './data/items'
import { Component } from 'react';
import Navbar from "./components/Navbar";
import ProductsList from './components/ProducstsList';
import Form from './components/Form';
//import ShoppingCart from "./components/ShoppingCart"

class App extends Component {
  state = {    //rerenders entire application
      shoppingCartItems:[],      
      items: items,
      item: '',
      brand: '',
      units: '',
      quantity: 1,
      

   }
  
 
  handleChange = (event) => {
   
       this.setState({ [event.target.id] : event.target.value }  )
     
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newProduct = {
        item: this.state.item,
        brand: this.state.brand,
        units: this.state.units,
        quantity: this.state.quantity,
        isPurchased:false
    };
   
     // set the new values in the state
    this.setState({
      items: [newProduct, ...this.state.items],
      item: '',
      brand: '',
      quantity: 1,
      isPurchased: false
    })
  }

  addToCart=(product)=>{
    this.setState({shoppingCartItems: [product, ...this.state.shoppingCartItems]})
  }

 

  render() {
  console.log(items)
  return (
    <div className="App">
    <Navbar text='Groceries List' />
    
    {/* <ShoppingCart  shoppingCartItems={this.state.shoppingCartItems}/> */}
    <Form 
       handleSubmit={this.handleSubmit}
       handleChange={this.handleChange}
       item={this.state.item}
       brand={this.state.brand}
       units={this.state.units}
       quantity={this.state.quantity}
      /> 
    <ProductsList products={this.state.items} addToCart={this.addToCart} />
    </div>
  );
  }
}

export default App;
