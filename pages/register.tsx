import { Layout } from "/components/layout";
import fb from "/lib/firebase";

import firebase from "firebase";
import { useState } from "react";
import { useRouter } from "next/router";

export type firebasePostContents = {
  name: string;
  body: string;
  createdAt: firebase.firestore.Timestamp;
};
export default function Home() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const handleOk = () => {
    const boardContents: firebasePostContents = {
      name,
      body,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    if (name && body) {
      fb.firestore().collection("board").add(boardContents);
      setBody("");
      setName("");
      router.push("/");
    } else {
      alert("文字を入力してください");
    }
  };

  return (
    <Layout>
      <h5 className="text-center font-bold py-14">コメント</h5>
      <div className="m-auto max-w-md py-14 px-8 bg-white shadow-lg rounded-lg my-20 w-9/12">
        <div className="input-field ">
          <input
            placeholder="じんけんさん"
            id="first_name"
            type="text"
            className="validate"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="active">ニックネーム</label>
        </div>

        <div className="input-field">
          <textarea
            id="textarea1"
            className="materialize-textarea"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label className="active">質問内容（しつもんないよう）</label>
        </div>

        <div className="text-center my-10">
          <button
            className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleOk()}
          >
            コメントする
          </button>
        </div>
      </div>
    </Layout>
  );
}
