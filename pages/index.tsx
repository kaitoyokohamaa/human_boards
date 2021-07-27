import { Card } from "components/card";
import { Layout } from "components/layout";
export default function Home() {
  return (
    <Layout>
      <Card
        votes={1}
        comments={1}
        contents={"無理やり勉強させられるのは子供の人権ですか？"}
        good={1}
        bad={1}
      />
    </Layout>
  );
}
