import classes from './CartItem.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../store/Cart-Slice';

const CartItem = (props) => {
  // const { title, quantity, total, price } = props.item;
  const dispatch=useDispatch();
  const items =useSelector(state=>state.cart.items)

  const removeItemhandler=(item)=>{
    dispatch(cartActions.removeItem(item))
  }

  const addItemHandler=(item)=>{
    dispatch(cartActions.addItem(item))
  }





  return (<>
    
      {items.map((item)=>(
        {key:item.id},
        <li className={classes.item}>
        <header>
          
          <h3>{item.title}</h3>
          <div className={classes.price}>
            ${item.quantity*item.price.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{item.quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={()=>removeItemhandler(item)}>-</button>
            <button onClick={()=>addItemHandler(item)}>+</button>
          </div>
        </div>
      </li>
      ))}
      
    </>
  );
}


export default CartItem;
