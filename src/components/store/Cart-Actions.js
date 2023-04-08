import { uiActions } from "./UI-Slice";
import { cartActions } from "./Cart-Slice";

export const fetchCartData=()=>{
    return async (dispatch) =>{ 
        const fetchData=async()=>{
          const response=await fetch('https://react-http-c38c6-default-rtdb.firebaseio.com/cart.json')
          if(!response.ok){
            throw new Error('could not fetch cart data!')
          }
          const data=response.json()

          return data;
        }
        try{
            const cartData=await fetchData();
            dispatch(cartActions.replaceCart({items:cartData.items || [],totalQuantity:cartData.totalQuantity}))
        } catch(error){
            dispatch(uiActions.showNotification({status:"error",title:'Error',message:"fetching cart data failed!"}))


        }
    }
}


export const SendCartData = (cart) => {
    return async(dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending....",
          title: "pending",
          message: "sending cart data...",
        })
      );
    const sendRequest=async()=>{
         const response=await fetch('https://react-http-c38c6-default-rtdb.firebaseio.com/cart.json',{
        method:'PUT',
        body:JSON.stringify({items:cart.items,totalQuantity:cart.totalQuantity})
      })
      if(!response.ok){
        throw new Error('sending cart Data failed!')
      }}
      try{
          await sendRequest()
          dispatch(uiActions.showNotification({status:"Success....",title:'Success',message:"sent cart data successfully!"}))
  
      
      
      } catch(error){
          dispatch(uiActions.showNotification({status:"error",title:'Error',message:"sending cart data failed!"}))
  
      }
  
      }
      
      
    };
  
  