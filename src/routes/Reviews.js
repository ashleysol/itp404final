import { useLoaderData, Outlet } from "react-router-dom";
import Review from "../components/Review";
import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    document.title = "Reviews";
  }, []);

  const data = useLoaderData();
  // Show review from most recent to oldest
  const reversed = [...data].reverse();
  const reviews = reversed.map((review) => {
    return (
      <Review
        key={review.id}
        title={review.title}
        body={review.body}
        name={review.userName}
        id={review.id}
      />
    );
  });
  return (
    <>
      <h1>Reviews</h1>
      <Outlet />
      {reviews}
    </>
  );
}
