import { VFC, useState, useEffect } from "react";
import Link from "next/link";

import fb from "/lib/firebase";

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
  const [goodNumber, setGoodNUmber] = useState<number>(0);
  const [badNumber, setBadNumber] = useState<number>(0);

  useEffect(() => {
    fb.firestore()
      .collection("board")
      .doc(props.history)
      .onSnapshot((res) => {
        res.data()?.good && setGoodNUmber(res.data().good);
        res.data()?.bad && setBadNumber(res.data().bad);
      });
  }, []);

  const onGood = () => {
    const doGood = goodNumber + 1;
    fb.firestore()
      .collection("board")
      .doc(props.history)
      .update({ good: doGood });
  };
  const onBad = () => {
    const doBad = badNumber + 1;
    fb.firestore()
      .collection("board")
      .doc(props.history)
      .update({ bad: doBad });
  };

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
          <button
            className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={onGood}
          >
            <MdSentimentVerySatisfied size="20" />
            <span id="good">{props.good}</span>
          </button>
        </div>
        <div>
          <button
            className="bg-pink-5 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={onBad}
          >
            <MdSentimentDissatisfied size="20" />
            <span id="bad">{props.bad}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
