import './App.css';
import productsData from './data/productsData'
import items from './data/items'
import { Component } from 'react';
import Navbar from "./components/Navbar";
import ProductsList from './components/ProducstsList';
import Form from './components/Form';
import ShoppingCart from "./components/ShoppingCart"
class App extends Component {
  state = {    //rerenders entire application
     shoppingCartItems:[],      
     items: items,
     item: '',
     brand: '',
     units: '',
     quantity: 0,

   }
  
 
  handleChange = (event) => {
   
       this.setState({ [event.target.id] : event.target.value }  )
     
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newProduct = {
      item: this.state.productName,
      brand: this.state.brand,
      quantity: this.state.quantity,
      isPurchased:false
    };
   
     // set the new values in the state
    this.setState({
      items: [newProduct, ...this.state.items],
      item: '',
      brand: '',
      quantity: 0,
      isPurchased: false
    })
  }

  addToCart=(product)=>{
    console.log(product)
    this.setState({shoppingCartItems: [product, ...this.state.shoppingCartItems]})
  }

  render() {
  console.log(items)
  return (
    <div className="App">
    <Navbar text='Groceries List' />
    
    <ShoppingCart  shoppingCartItems={this.state.shoppingCartItems}/>
    {/* <Form 
       handleSubmit={this.handleSubmit}
       handleChange={this.handleChange}
       productName={this.state.productName}
       productPrice={this.state.productPrice}
       productDescription={this.state.productDescription}
      /> */}
    <ProductsList products={this.state.items} addToCart={this.addToCart}/>
    </div>
  );
  }
}



export default App;
