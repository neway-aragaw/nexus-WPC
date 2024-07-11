import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

function NavbarList({ LinkName, LinkUrl }) {
  return (
    <Nav.Item>
      <Nav.Link href={LinkUrl}>{LinkName}</Nav.Link>
    </Nav.Item>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div>
      <div className={`nav-tool ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle className={`toggle ${navVisible ? 'active' : ''}`} aria-controls="responsive-navbar-nav" onClick={toggleNav}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </Navbar.Toggle>
            <Navbar.Brand href="/" className={`logo ${navVisible ? 'd-none' : ''}`}>
              <img src="https://nexus-now.com/wp-content/uploads/2020/08/nexus_logo_adjusted.png" alt="Apple logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className={navVisible ? 'show' : ''}>
              <Nav className="mr-auto w-100 justify-content-center">
                <NavbarList LinkUrl="/mac/" LinkName="About" />
                <NavbarList LinkUrl="/Start Training/" LinkName="Start Training" />
                <NavbarList LinkUrl="/Quick Directory/" LinkName="Quick Directory" />
                <NavbarList LinkUrl="/Contact/" LinkName="Contact" />
                <NavbarList LinkUrl="/a/" LinkName="a" />
                <NavbarList LinkUrl="/b/" LinkName="b" />
                <NavbarList LinkUrl="/c/" LinkName="c" />
                {/*  */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
