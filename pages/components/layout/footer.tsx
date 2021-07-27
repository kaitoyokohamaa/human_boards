import Link from "next/link";
import React from "react";
export const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">子どもの人権</h5>
        </div>
        <div className="col l4 offset-l2 s12">
          <ul>
            <li>
              <Link href="/">
                <a className="grey-text text-lighten-3">質問一覧</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a className="grey-text text-lighten-3">質問作成</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">© 東洋大学　ライフデザイン学科　内田ゼミ</div>
    </div>
  </footer>
);
