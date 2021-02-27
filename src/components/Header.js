function Header() {
  return (
    <header>
      <h1 className="logo"><a className="link-menu" href="/">89</a></h1>
      <nav className="nav-bar">
        <ul>
          <li className="list-menu"><a className="link-menu" href="/profile">프로필</a></li>
          <li className="list-menu"><a className="link-menu" href="/project">프로젝트</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;