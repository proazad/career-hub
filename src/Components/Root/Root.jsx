import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
const Root = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
