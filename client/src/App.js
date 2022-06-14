import "./App.css";
import Signup from "./components/useraccount/Signup";
import Signin from "./components/useraccount/Signin";
import Forgetpswd from "./components/useraccount/Forgetpswd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Posts from "./components/CommunityForum/Posts";

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
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
