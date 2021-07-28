import React from "react";
import { Layout } from "/components/layout";
import fb from "/lib/firebase";
type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const ref = fb.firestore().collection("board").doc(params.id).get();
  const lists = [];
  await ref.then((res) => {
    lists.push({ name: res.data().name, body: res.data().body });
  });

  return {
    props: {
      lists,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default function Id({ lists }) {
  return (
    <Layout>
      <div className="h-screen m-auto w-9/12 mt-20">
        <div className="card md:p-20">
          <div className="card-content">
            <p>{lists && lists[0].body}</p>
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
