import ProductItem from './ProductItem'

const ProductsList = (props) => {
   
    return (
      <div>
        <h1>Groceries</h1>
       

    {props.products.map(
        (item, idx) => !item.isPurchased && <ProductItem product={item} key={idx}  removeItem={props.removeItem} />
      )}
      </div>
    );
};

export default ProductsList