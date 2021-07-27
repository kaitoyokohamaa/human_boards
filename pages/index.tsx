import { Card } from "components/card";
import { Layout } from "components/layout";
export default function Home() {
  return (
    <Layout>
      <h2 className="text-center font-bold">質問一覧</h2>
      <div className="flex flex-wrap m-auto w-full justify-center gap-4 ">
        <Card
          votes={1}
          comments={1}
          contents={"無理やり勉強させられるのは子供の人権ですか？"}
          good={1}
          bad={1}
        />
        <Card
          votes={1}
          comments={1}
          contents={"無理やり勉強させられるのは子供の人権ですか？"}
          good={1}
          bad={1}
        />
        <Card
          votes={1}
          comments={1}
          contents={"無理やり勉強させられるのは子供の人権ですか？"}
          good={1}
          bad={1}
        />
        <Card
          votes={1}
          comments={1}
          contents={"無理やり勉強させられるのは子供の人権ですか？"}
          good={1}
          bad={1}
        />
        <Card
          votes={1}
          comments={1}
          contents={"無理やり勉強させられるのは子供の人権ですか？"}
          good={1}
          bad={1}
        />
        <Card
          votes={1}
          comments={1}
          contents={"無理やり勉強させられるのは子供の人権ですか？"}
          good={1}
          bad={1}
        />
      </div>
      <div className="text-center my-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          もっと見る
        </button>
      </div>
    </Layout>
  );
}
