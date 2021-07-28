import React from "react";
import { Layout } from "/components/layout";
export default function detail() {
  return (
    <Layout>
      <div className="h-screen m-auto w-9/12 mt-20">
        <div className="card p-20">
          <div className="card-content">
            <p>勉強を親から急かされるのは人権の侵害ですか？</p>
          </div>
          <div className="m-auto flex">
            <div className="card-action">
              <a href="#">答える</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h5>匿名</h5>
            <p>人権の侵害です！</p>
          </div>
          <div className="m-auto flex"></div>
        </div>
      </div>
    </Layout>
  );
}
