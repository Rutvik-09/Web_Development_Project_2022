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

function App() {
  return (
    <div>
      {/* <header className="App-header"></header> */}
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/forgetpswd" element={<Forgetpswd />}></Route>
            <Route path="/communityforum" element={<Posts />}></Route>
            <Route path="/userprofile" element={<Profile />}></Route>
            <Route exact path="/productpage" element={<ProductPage />} />
            <Route exact path="/productreviews" element={<ProductReviews />} />
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
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
