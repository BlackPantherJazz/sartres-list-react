import Nav from './Nav.jsx'

const mainLinks = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"]

function Header() {
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav links={mainLinks} label="Main Navigation" colorClass="nav-main" />
    </header>
  )
}

export default Header