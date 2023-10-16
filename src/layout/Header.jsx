import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="container container__header">
        <nav>
          <div className="logo">Tsotetsi</div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="toggle">
            <span>menu</span>
          </div>
        </nav>
      </div>
    </header>
  );
};
