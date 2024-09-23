const Nav = ({header}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand">{header}</a>
        </div>
    </nav>
  )
}

export default Nav
