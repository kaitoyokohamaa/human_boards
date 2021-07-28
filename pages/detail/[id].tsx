import { useState, useEffect } from "react";
import { Layout } from "/components/layout";
import fb from "/lib/firebase";
import firebase from "firebase";
import { Modal, Input, Button } from "antd";
import "antd/dist/antd.css";

type Params = {
  params: {
    id: string;
  };
};
export type firebasePostContents = {
  name: string;
  body: string;
  createdAt: firebase.firestore.Timestamp;
};
export async function getStaticProps({ params }: Params) {
  const ref = fb.firestore().collection("board").doc(params.id).get();
  const lists = [];
  await ref.then((res) => {
    lists.push({ name: res.data().name, body: res.data().body });
  });
  const id = params.id;
  return {
    props: {
      lists,
      id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default function Id({ lists, id }) {
  const [modalVisible, setModalVisible] = useState(false);
  const ref = fb.firestore().collection("board");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [replys, setReplys] = useState<firebase.firestore.DocumentData>([]);

  useEffect(() => {
    let doBoardArray = [];
    ref
      .doc(id)
      .collection("reply")
      .orderBy("createdAt", "asc")
      .onSnapshot((res) => {
        res.forEach((reply) => {
          doBoardArray.push(reply.data());
        });
        setReplys(doBoardArray);
      });
  }, [modalVisible]);

  const handleOk = () => {
    const boardContents: firebasePostContents = {
      name,
      body,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    if (name && body) {
      ref.doc(id).collection("reply").add(boardContents);
      setModalVisible(false);
    } else {
      alert("文字を入力してください");
    }
  };

  return (
    <Layout>
      <div className="m-auto w-full px-4 mt-20">
        <div className="card md:p-20">
          <div className="card-content">
            <p>{lists && lists[0].body}</p>
          </div>
          <div className="m-auto flex ">
            <div className="card-action" onClick={() => setModalVisible(true)}>
              <a>答える</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full px-4 py-6">
        <h2>回答</h2>
        {replys.map((res, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-content">
                <h5>{res?.name}</h5>
                <p>{res?.body}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        title="質問に回答する"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        width="100%"
        footer={[
          <Button key="back" onClick={() => setModalVisible(false)}>
            キャンセル
          </Button>,
        ]}
      >
        <div className="m-auto max-w-md py-14 px-8 bg-white shadow-lg rounded-lg my-20 w-full">
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
            <label className="active">回答内容（かいとうないよう）</label>
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
      </Modal>
    </Layout>
  );
}
