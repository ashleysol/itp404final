import { useState } from "react";
import { Link } from "react-router-dom";
import Timestamp from "react-timestamp";
import Popup from "./Popup";
export default function Review(props) {
  const [popup, setPopup] = useState("");
  const title = props.title;
  const body = props.body;
  const name = props.name;
  const id = props.id;
  const current = new Date();

  const closePopup = function () {
    setPopup("");
  };
  const deleteClick = function () {
    setPopup(<Popup id={id} close={closePopup} />);
  };

  return (
    <div className="my-3">
      <h3>{title}</h3>
      <small>
        <strong>{name}</strong>
      </small>
      <p>
        {body} <br></br>
        <small>
          <Timestamp date={current} />
        </small>
      </p>
      <div>
        <Link to={`/reviews/${id}/edit`} className="btn btn-primary col-2">
          Edit
        </Link>
        <Link onClick={deleteClick} className="mx-1 btn btn-primary col-2">
          Delete
        </Link>
        {popup}
      </div>
    </div>
  );
}
