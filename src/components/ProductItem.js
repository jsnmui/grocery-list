const ProductItem = (props) => {
  const {item, brand, units, quantity} = props.product

    return(
        <div onClick={ () => props.addToCart(props.product) }>
          <h2>Item:{item}</h2>
          <h3>Brand:{brand}</h3>
          <h3>{quantity} {units}</h3>
        </div> 
    )
}

export default ProductItem