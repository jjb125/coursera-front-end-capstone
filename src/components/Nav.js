const links = [
    {href: '', name: 'Home'},
    {href: '', name: 'About'},
    {href: '', name: 'Menu'},
    {href: '', name: 'Reservations'},
    {href: '', name: 'Order Online'},
    {href: '', name: 'Login'},
  ];
  
  function Nav() {
    return (
      <nav>
        <ul>
          {links.map((item) => 
            <li>
              <a href={item.href}>
                {item.name}
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
  };
  
  export default Nav;