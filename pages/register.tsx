import { Layout } from "./components/layout";
import firebase from "./lib/firebase";

import { useState } from "react";
export type firebasePostContents = {
  name: string;
  body: string;
};
export default function Home() {
  const [name, setName] = useState("");

  const [body, setBody] = useState("");

  const handleOk = () => {
    alert("hoe");
    const boardContents: firebasePostContents = {
      name,
      body,
    };
    if (name && body) {
      firebase.firestore().collection("board").add(boardContents);
    } else {
      alert("文字を入力してください");
    }
  };

  return (
    <Layout>
      <h2 className="text-center font-bold">新規コメント</h2>
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="じんけんさん"
              id="first_name"
              type="text"
              className="validate"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="active">ニックネーム</label>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
              <label className="active">質問内容（しつもんないよう）</label>
            </div>
          </div>
          <div className="text-center my-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleOk()}
            >
              投稿する
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
