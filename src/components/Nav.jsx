function Nav({ links, label, colorClass }) {
  return (
    <nav aria-label={label} role="navigation">
      <ul className={`nav-list ${colorClass}`}>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav