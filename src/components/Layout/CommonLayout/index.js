import useSmoothScroll from "../../../logic/useSmoothScroll";
import Footer from "./Footer";
import Menu from "./Menu";
const CommonLayout = ({ children, props }) => {
  useSmoothScroll()
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
