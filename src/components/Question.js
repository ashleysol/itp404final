// import { useLoaderData, useParams } from "react-router-dom";

export default function Question(props) {
  const number = props.index + 1;
  const word = props.word;

  return (
    <div>
      <h1>Question {number}</h1>
      <p>
        Translate <strong>{word}</strong> from English to Spanish.
      </p>
      <form>
        <input
          type="answer"
          className="form-control"
          id="answer"
          placeholder="Enter Translated Word"
        />
        <button type="submit" className="btn btn-primary">
          Submit Answer
        </button>
      </form>
    </div>
  );
}
