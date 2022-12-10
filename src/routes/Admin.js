import { useLoaderData, useNavigate } from "react-router-dom";
import DeleteChecklist from "../components/DeleteChecklist";
import { deleteReview, deleteUser } from "../api";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Admin(props) {
  const navigate = useNavigate();
  const title = props.type;

  useEffect(() => {
    document.title = `Admin - Delete ${title}`;
  }, []);

  const data = useLoaderData();
  let color = "black";
  if (title === "Reviews") {
    color = "blue";
  }

  const clickHandler = function (selectedItems) {
    const selectItemsArray = selectedItems.split(",");
    const allPromises = selectItemsArray.map((item) => {
      if (title === "Reviews") {
        return deleteReview(item);
      } else {
        return deleteUser(item);
      }
    });
    Promise.all(allPromises).then(() => {
      if (title === "Reviews") {
        toast.success("Review(s) deleted sucessfully.");
        navigate("/reviews");
      } else {
        toast.success("User(s) deleted sucessfully.");
        navigate("/");
      }
    });
  };
  return (
    <div className="container">
      <DeleteChecklist
        title={title}
        items={data}
        color={color}
        onClick={(selectedItems) => {
          clickHandler(selectedItems);
        }}
      ></DeleteChecklist>
    </div>
  );
}
