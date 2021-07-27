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
          <div className="flex">
            <h5>{props.votes}投票</h5>
            <h5>{props.comments}コメント</h5>
          </div>
          <p>{props.contents}</p>
        </div>
        <div className="flex justify-center gap-4">
          <div>
            <a className="waves-effect waves-light btn-large btn">
              {/* <i className="material-icons">sentiment_very_satisfied</i> */}
              <span id="good">{props.good}</span>
            </a>
          </div>
          <div>
            <a className="waves-effect waves-light btn-large btn">
              {/* <i className="material-icons">sentiment_very_dissatisfied</i> */}
              <span id="bad">{props.bad}</span>
            </a>
          </div>
        </div>

        <div className="card-action">
          <Link href="/detail">
            <a href="#">詳細</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
