import { Link } from "react-router-dom";

export default function Form() {
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Enter Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Username</label>
        <input
          type="username"
          className="form-control"
          id="Username"
          placeholder="Enter Username"
        />
      </div>
      <div>
        <select className="custom-select">
          <option defaultValue>Select Language to Translate From</option>
          <option value="Spanish">Spanish</option>
          <option value="English">English</option>
        </select>
        <select className="custom-select">
          <option defaultValue>Select Language to Translate To</option>
          <option value="Spanish">Spanish</option>
          <option value="English">English</option>
        </select>
      </div>
      <div>
        <select className="custom-select">
          <option defaultValue>Select Number of Questions</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <Link type="submit" className="btn btn-primary" to="/game">
        Start Game
      </Link>
    </Form>
  );
}
