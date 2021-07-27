import Link from "next/link";
import React from "react";
export const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <Link href="/">
          <a className="brand-logo">子どもの人権</a>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link href="/">
              <a>質問一覧</a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a>質問作成</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
