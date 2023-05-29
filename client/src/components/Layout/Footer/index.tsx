const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer style={{ marginTop: "5rem" }}>
      <a href="https://github.com/ArNeto19" target="_blank">
        @ArNeto19
      </a>{" "}
      ⓒ {thisYear}{" "}
    </footer>
  );
};
export default Footer;
