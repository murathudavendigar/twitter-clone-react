import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Main from "./components/Main";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Header />} />
    //     <Route path="/userprofile" element={<UserProfile />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Header />
    </div>
  );
}

export default App;
