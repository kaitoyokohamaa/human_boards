import { VFC } from "react";
import Link from "next/link";
type Props = {
  votes: number;
  comments: number;
  contents: string;
  good: number;
  bad: number;
};
export const Card: VFC<Props> = ({ ...props }) => {
  return (
    <div className="col s12 m7">
      <div className="card">
        <div className="card-content">
          <div className="flex justify-center gap-4 ">
            <h5>{props.votes}投票</h5>
            <h5>{props.comments}コメント</h5>
          </div>
          <p>{props.contents}</p>
        </div>
        <div className="flex justify-center gap-4 my-4">
          <div>
            <button className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              {/* <i className="material-icons">sentiment_very_satisfied</i> */}
              <span id="good">{props.good}</span>
            </button>
          </div>
          <div>
            <button className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              {/* <i className="material-icons">sentiment_very_dissatisfied</i> */}
              <span id="bad">{props.bad}</span>
            </button>
          </div>
        </div>

        <div className="card-action">
          <Link href="/detail">
            <a className="text-pink!" href="#">
              詳細
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
