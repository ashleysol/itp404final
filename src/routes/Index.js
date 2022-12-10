import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const [userName, setUserName] = useState("");
  const [userNameWarning, setUserNameWarning] = useState("");
  const [translateLang, setTranslateLang] = useState("");
  const [translateLangWarning, setTranslateLangWarning] = useState("");
  const [newLang, setNewLang] = useState("");
  const [newLangWarning, setNewLangWarning] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Bilingual Test Game";
  }, []);
  const checkForm = function () {
    if (userName === "") {
      setUserNameWarning("Username Required");
    }
    if (translateLang === "") {
      setTranslateLangWarning("First Language Required");
    }
    if (newLang === "") {
      setNewLangWarning("Second Language Required");
    }
    if (userName !== "" && translateLang !== "" && newLang !== "") {
      setTimeout(() => {
        navigate("/game");
      }, 0.5);
    }
  };

  return (
    <>
      <h1 className="justify-content-center">Bilingual Test Game</h1>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Username</label>
          <input
            type="username"
            className="form-control"
            id="Username"
            placeholder="Enter Username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <small>{userNameWarning}</small>
        </div>
        <div>
          <select
            className="custom-select mb-3"
            value={translateLang}
            onChange={(event) => {
              setTranslateLang(event.target.value);
            }}
          >
            <option value="">Select Language to Translate From</option>
            {/* <option value="Spanish">Spanish</option> */}
            <option value="English">English</option>
          </select>
          <select
            className="custom-select"
            value={newLang}
            onChange={(event) => {
              setNewLang(event.target.value);
            }}
          >
            <option defaultValue>Select Language to Translate To</option>
            <option value="Spanish">Spanish</option>
            {/* <option value="English">English</option> */}
          </select>
        </div>
        <small>{translateLangWarning}</small>
        <small className="mx-3">{newLangWarning}</small>
        {/* <div>
          <select className="custom-select">
            <option defaultValue>Select Number of Questions</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div> */}
        <Link className="btn btn-primary" onClick={checkForm}>
          Start Game
        </Link>
      </form>
    </>
  );
}
