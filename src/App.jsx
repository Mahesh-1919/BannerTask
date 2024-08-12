import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Products from "./components/products";
import { useRecoilValue } from "recoil";
import { BannerSwitch } from "../store/atom";

function App() {
  const toggle = useRecoilValue(BannerSwitch);
  return (
    <>
      <Navbar />
      {toggle && <Banner />}

      <Products />
    </>
  );
}

export default App;
