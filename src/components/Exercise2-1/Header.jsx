const Header = (props) => {
  console.log("Header", props.course);
  return <h1>{props.course}</h1>;
};

export default Header;
