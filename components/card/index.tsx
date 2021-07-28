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
};
export const Card: VFC<Props> = ({ ...props }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="font-bold text-xl">{props.contents}</p>
      </div>
      <div className="flex justify-center gap-4 my-4">
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

      <div className="card-action">
        <Link href="/detail">
          <a className="text-pink!" href="#">
            詳細
          </a>
        </Link>
      </div>
    </div>
  );
};
