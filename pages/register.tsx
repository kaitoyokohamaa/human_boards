import { Layout } from "./components/layout";
export default function Home() {
  return (
    <Layout>
      <h2 className="text-center font-bold">新規コメント</h2>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="じんけんさん"
                id="first_name"
                type="text"
                className="validate"
              />
              <label className="active">ニックネーム</label>
            </div>
          </div>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label className="active">質問内容（しつもんないよう）</label>
                </div>
              </div>
              <div className="text-center my-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  投稿する
                </button>
              </div>
            </form>
          </div>
        </form>
      </div>
    </Layout>
  );
}
