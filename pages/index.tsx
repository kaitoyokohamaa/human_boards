import { Card } from "./components/card";
import { Layout } from "./components/layout";
import fb from "./lib/firebase";
import firebase from "firebase";

import { useState, useEffect } from "react";
export default function Index() {
  const [list, setList] = useState<firebase.firestore.DocumentData>([]);
  let postList = [];

  useEffect(() => {
    fb.firestore()
      .collection("board")
      .onSnapshot((res) => {
        res.forEach((t) => {
          postList.push(t.data());
        });
        setList(postList);
      });
  }, []);

  return (
    <Layout>
      <h2 className="text-center font-bold">質問一覧</h2>
      <div className="flex flex-wrap m-auto w-full justify-center gap-4 ">
        {list.length &&
          list.map((res, i) => {
            return (
              <Card
                key={i}
                votes={1}
                comments={1}
                contents={res.body}
                good={1}
                bad={1}
              />
            );
          })}
      </div>
      <div className="text-center my-10">
        <button className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          もっと見る
        </button>
      </div>
    </Layout>
  );
}
