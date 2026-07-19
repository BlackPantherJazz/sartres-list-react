import Nav from './Nav.jsx'

const footerLinks = [
  "Home",
  "Women's",
  "Men's",
  "On the Street",
  "The Catwalk",
  "AdWatch",
  "About",
  "Tips",
]

function Footer() {
  return (
    <footer>
      <Nav links={footerLinks} label="Footer Navigation" colorClass="nav-footer" />
      <p className="copyright">&copy; 2013 Valet Industries, Inc</p>
    </footer>
  )
}

export default Footer