import "./App.css";
import Signup from "./components/useraccount/Signup";
import Signin from "./components/useraccount/Signin";
import Forgetpswd from "./components/useraccount/Forgetpswd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Posts from "./components/CommunityForum/Posts";
import Profile from "./components/useraccount/Profile";
import ProductReviews from "./components/Reviews/PostedReviews";
import ProductPage from "./components/Reviews/ProductPage";
import CreateProductReview from "./components/Reviews/CreateProductReview";
import CreateOwnerReview from "./components/Reviews/CreateOwnerReview";
import Analytic from "./components/Reviews/Analytics";
import MainBillingPage from "./components/Billing/MainBillingPage";
import { useState } from "react";
import Main from "./components/productcatalogue/Main";
import Cart from "./components/productcatalogue/Cart";
import Product1 from "./components/productcatalogue/Product1";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
 
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      {/* <header className="App-header"></header> */}
      
      <div className="container">
        <BrowserRouter>
        <Header countCartItems={cartItems.length} />
          <Routes>
            <Route path="/" element={<Signup />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/forgetpswd" element={<Forgetpswd />}></Route>
            <Route path="/communityforum" element={<Posts />}></Route>
            <Route path="/userprofile" element={<Profile />}></Route>
            <Route exact path="/productpage" element={<ProductPage />} />
            <Route exact path="/productreviews" element={<ProductReviews />} />
            <Route exact path="/MainBillingPage" element={<MainBillingPage />} />
            <Route
              exact
              path="/createproductreview"
              element={<CreateProductReview />}
            />
            <Route
              exact
              path="/createownerreview"
              element={<CreateOwnerReview />}
            />
            <Route exact path="/analytic" element={<Analytic />} />
            <Route exact path='/products' element={<div className="row"><Main products={products} onAdd={onAdd}></Main></div>}>
            </Route>
            <Route exact path='/product/:id' element={<div className="row"><Product1 products={products} onAdd={onAdd}></Product1></div>}>
            </Route>
            <Route exact path='/cart' element={<Cart className="block" cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>}/>
    
            
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
