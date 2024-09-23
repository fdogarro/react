const Header = ({img, header}) => {
  return (
    <>
        <img src={img} className="hero-img center-block"/>
        <hr />
        <h3 className="mt-3">{header}</h3>
        <hr /> 
    </>
  )
}

export default Header
