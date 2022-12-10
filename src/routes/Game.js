import { useLoaderData } from "react-router-dom";
import Question from "../components/Question";
import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    document.title = `Game`;
  }, []);

  let words = useLoaderData();

  const questions = words.map((word, index) => {
    return <Question key={word} index={index} word={word} />;
  });

  return <div>{questions}</div>;
}
