const Header = (props) => {
  console.log("Header", props.course);
  return <h2>{props.course}</h2>;
};

export default Header;
