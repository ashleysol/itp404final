import { Form } from "react-router-dom";
import { useEffect } from "react";

export default function AdminPassword() {
  useEffect(() => {
    document.title = "Admin";
  }, []);
  return (
    <>
      <h3>Login</h3>
      <Form method="post">
        <div className="form-floating mb-3 col-6">
          <input
            className="form-control"
            type="password"
            id="password-input"
            name="password"
          />
          <label htmlFor="name-input">Password</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
}
