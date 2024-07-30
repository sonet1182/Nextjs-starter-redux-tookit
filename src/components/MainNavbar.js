import Link from "next/link";
import React from "react";
import './style.css'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact_us", label: "Contact" },
  { href: "/student/list", label: "Student List" },
  { href: "/profile", label: "Profile" },
];

function MainNavbar() {
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="logo text-danger">Logo</div>
          <div className="nav-list">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainNavbar;
