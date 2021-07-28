import { VFC } from "react";
import Link from "next/link";
import React from "react";
import {
  MdSentimentVerySatisfied,
  MdSentimentDissatisfied,
} from "react-icons/md";
type Props = {
  contents: string;
  good: number;
  bad: number;
  history: string;
};
export const Card: VFC<Props> = ({ ...props }) => {
  return (
    <div className="card hover:shadow-2xl cursor-pointer">
      <Link href={`detail/${props.history}`}>
        <a>
          <div className="card-content">
            <p className="font-bold text-xl text-pink-5 hover:underline">
              {props.contents}
            </p>
          </div>
        </a>
      </Link>
      <div className="flex justify-center gap-4 py-4">
        <div>
          <button className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            <MdSentimentVerySatisfied size="20" />
            <span id="good">{props.good}</span>
          </button>
        </div>
        <div>
          <button className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            <MdSentimentDissatisfied size="20" />
            <span id="bad">{props.bad}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
