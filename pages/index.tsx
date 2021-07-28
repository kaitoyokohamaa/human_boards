import { Card } from "/components/card";
import { Layout } from "/components/layout";
import fb from "/lib/firebase";
import firebase from "firebase";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Index() {
  const [list, setList] = useState<firebase.firestore.DocumentData>([]);
  const [isMore, setIsmore] = useState(false);
  let postList = [];

  useEffect(() => {
    fb.firestore()
      .collection("board")
      .orderBy("createdAt", "desc")
      .onSnapshot((res) => {
        res.forEach((t) => {
          postList.push(t.data());
        });
        setList(postList);
      });
  }, []);

  return (
    <Layout>
      <h2 className="text-center font-bold">しつもん</h2>
      <div className="flex flex-wrap m-auto w-full justify-center gap-4 ">
        {list.length && !isMore
          ? list.slice(0, 6).map((res, i) => {
              return <Card key={i} contents={res.body} good={1} bad={1} />;
            })
          : list.map((res, i) => {
              return <Card key={i} contents={res.body} good={1} bad={1} />;
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
