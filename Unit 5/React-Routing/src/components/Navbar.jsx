import { Link } from "react-router-dom";
import './navbar.css';

export const Navbar = () => {
  const nav = [
    { title: "Home", to: "/" },

    { title: "About", to: "/about" },

    { title: "Product", to: "/product" },
    { title: "Cart", to: "/cart" }

    // { title: "Users", to: "/users" },

    // { title: "Login", to: "/login" },
  ];

  return (
    <div id="navbar">
      {nav.map((e, i) => (
        <Link key={i} to={e.to} style={{ margin: "10px", color: "tomato" }} id="navbarcomp">
          {e.title}
        </Link>
      ))}
    </div>
  );
};
