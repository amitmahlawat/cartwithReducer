import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from './components/store/UI-Slice';

function App() {

  const dispatch=useDispatch();
  const cartIsVisible =useSelector(state=>state.ui.cartIsVisible)
  return (
    <Layout>
      {cartIsVisible&&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
