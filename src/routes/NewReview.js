import { Form } from "react-router-dom";
import { useEffect } from "react";

export default function NewReview() {
  useEffect(() => {
    document.title = "Create Review";
  }, []);
  return (
    <>
      <div className="my-5">
        <h2>Leave a Review</h2>
        <Form method="post">
          <div className="form-floating mb-3 col-6">
            <input className="form-control" id="name-input" name="name" />
            <label htmlFor="name-input">Name here</label>
          </div>
          <div className="form-floating mb-3 col-8">
            <input className="form-control" id="title-input" name="title" />
            <label htmlFor="title-input">Title here</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="review-input"
              name="review"
            />
            <label htmlFor="review-input">Leave a new review here</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
      <h2>Read Other People's Reviews</h2>
    </>
  );
}
