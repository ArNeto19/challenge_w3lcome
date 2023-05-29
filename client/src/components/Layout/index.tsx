import Footer from "./Footer";

const Layout = (props: any) => {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
