const ProductItem = (props) => {
  const {item, brand, units, quantity} = props.product
    
    return(
        <div >
          <h2>Item:{item}</h2>
          <h3>Brand:{brand}</h3>
          <h3>{quantity} {units}</h3>
          <button onClick={ () => props.removeItem(props.product) }>Remove</button>
        </div> 
    )
}

export default ProductItem