import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export default function Popupp(props) {
  const id = props.id;

  return createPortal(
    <div className="popup">
      <h1>Delete?</h1>
      <p>Are you sure you want to delte this review?</p>
      <Link
        to={`/reviews/${id}/delete`}
        onClick={props.close}
        className="mx-1 btn btn-primary col-2"
      >
        Yes
      </Link>
      <Link
        to={`/reviews`}
        onClick={props.close}
        className="mx-1 btn btn-primary col-2"
      >
        No
      </Link>
    </div>,
    document.getElementById("modal-container")
  );
}
