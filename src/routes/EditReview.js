import { Form, useLoaderData } from "react-router-dom";
import { useEffect } from "react";

export default function EditReview() {
  useEffect(() => {
    document.title = "Edit Review";
  }, []);

  const review = useLoaderData();
  return (
    <>
      <h1>Edit Review</h1>
      <Form method="post">
        <div className="form-floating mb-3 col-6">
          <input
            disabled
            className="form-control"
            id="name-input"
            name="name"
            defaultValue={review.userName}
          />
          <label htmlFor="name-input">Name</label>
        </div>
        <div className="form-floating mb-3 col-8">
          <input
            className="form-control"
            id="title-input"
            name="title"
            defaultValue={review.title}
          />
          <label htmlFor="title-input">New Title Here</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="review-input"
            name="review"
            defaultValue={review.body}
          />
          <label htmlFor="review-input">New Review here</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
}
