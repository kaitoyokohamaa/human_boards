import { Card } from "/components/card";
import { Layout } from "/components/layout";
import fb from "/lib/firebase";
import firebase from "firebase";
import Link from "next/link";
import { useState } from "react";

export async function getStaticProps() {
  let postList = [];
  const ref = fb.firestore().collection("board").orderBy("createdAt", "desc");
  await ref.get().then((res) => {
    res.forEach((t) => {
      postList.push({
        name: t.data().name,
        id: t.id,
        body: t.data().body,
        good: t.data()?.good,
        bad: t.data()?.bad,
      });
    });
  });

  return {
    props: { postList },
    revalidate: 10,
  };
}

export default function Index({ postList }) {
  const [isMore, setIsmore] = useState(false);

  return (
    <Layout>
      <h5 className="text-center font-bold py-14">しつもんいちらん</h5>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        {postList.length && !isMore
          ? postList.slice(0, 6).map((res, i) => {
              console.log(res);
              return (
                <Card
                  key={i}
                  contents={res.body}
                  good={res?.good ? res?.good : 0}
                  bad={res?.bad ? res?.bad : 0}
                  history={res.id}
                />
              );
            })
          : postList.map((res, i) => {
              return (
                <Card
                  key={i}
                  contents={res.body}
                  good={res?.good ? res?.good : 0}
                  bad={res?.bad ? res?.bad : 0}
                  history={res.id}
                />
              );
            })}
      </div>
      <div className="text-center my-10">
        {!isMore && (
          <button
            className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsmore(true)}
          >
            もっと見る
          </button>
        )}
      </div>
      <div className="fixed bottom-10 right-10 sp:block md:hidden">
        <button className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-8 px-8 rounded">
          <Link href="/register">
            <a className="text-white">さくせい</a>
          </Link>
        </button>
      </div>
    </Layout>
  );
}
