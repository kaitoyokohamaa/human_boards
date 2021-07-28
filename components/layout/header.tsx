import Link from "next/link";
import React from "react";
export const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <Link href="/">
          <a className="brand-logo">子どもの権利</a>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link href="/">
              <a>しつもんいちらん</a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a>しつもんさくせい</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
