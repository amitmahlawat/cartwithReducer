import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../store/Cart-Slice';
const ProductItem = (props) => {
  const dispatch=useDispatch();
  const items =useSelector(state=>state.cart.items)
  // const { title, price, description ,id} = props;
const itemList=props.items
  const addToCartHandler=(item)=>{
    dispatch(cartActions.addItem(item))
  }

  return (
    <li className={classes.item}>
      {itemList.map((item)=>(
       
        <Card>
          
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={()=>addToCartHandler(item)}>Add to Cart</button>
        </div>
      </Card>
      ))}
      
    </li>
  );
};

export default ProductItem;
