import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from './components/store/UI-Slice';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification'

let isInitial=true;
function App() {

  const dispatch=useDispatch();
  const cartIsVisible =useSelector(state=>state.ui.cartIsVisible)
  const cart =useSelector(state=>state.cart)
  const notification =useSelector(state=>state.ui.notification)

useEffect(()=>{
  
  const sendCartData=async()=>{
    dispatch(uiActions.showNotification({status:"pending....",title:'pending',message:"sending cart data..."}))
 const response=await   fetch('https://react-http-c38c6-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart)
    })
    if(!response.ok){
      throw new Error('sending cart Data failed!')
    }
    dispatch(uiActions.showNotification({status:"Success....",title:'Success',message:"sent cart data successfully!"}))
  }
  if(isInitial){
    isInitial=false;
    return;
  }


  sendCartData().catch(error=>{
    dispatch(uiActions.showNotification({status:"error",title:'Error',message:"sending cart data failed!"}))
  })
  
},[cart])



  return (
    <Fragment>
      {notification&&<Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {cartIsVisible&&<Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
