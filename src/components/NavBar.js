import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const hypers = links.map((el) => {
    return <a key={el} href={'#'+el}>{el}</a>
  })
  return (
  <nav>
    {hypers}
  </nav>
  );
}

export default NavBar;

//a href="#home">home</a>