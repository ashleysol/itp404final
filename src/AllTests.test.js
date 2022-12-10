// import { render, fireEvent, screen } from "@testing-library/react";
// import {
//   fetchRandomWords,
//   fetchReviews,
//   saveReview,
//   fetchReview,
//   updateReview,
//   deleteReview,
//   fetchUsers,
//   deleteUser,
// } from "./api";
// //This gives me a link error on terminal (which is how i delete reviews) have to manually delete
// //render(<Review key={2} title="" body="" name="" id="2" />);
// //fireEvent.click(screen.getByText("Delete"));

// // //1. Creating a review
// test("Creating a review", () => {
//   render();
//   saveReview("TestTitle", "TestBody", "TestName").then((response) => {
//     fetchReviews("1").then((response) => {
//       expect(response.title).toEqual("TestTitle");
//     });
//   });
// });

// // 2. Deleting a review
// test("Deleting a review", () => {
//   render();
//   deleteReview("1").then((response) => {
//     fetchReviews("1").then((response) => {
//       expect(response).toEqual({});
//     });
//   });
// });

// // 3. Deleting a user
// test("Deleting a user", () => {
//   render();
//   deleteUser("1").then((response) => {
//     fetchReview("1").then((response) => {
//       expect(response).toEqual({});
//     });
//   });
// });

// //4. Get word
// // test("Fetch word", () => {
// //   render();
// //   const data = fetchRandomWords().then((data) => {
// //     return data;
// //   });
// //   expect(data).ToEqual({});
// // });

// //5. Translate word

// //6. Fetch all users

// test("Get All Reviews", () => {
//   render();
//   fetchReviews().then((response) => {
//     fetchReviews("1").then((response) => {
//       expect(response.length).toEqual(6);
//     });
//   });
// });

// //8. Update review
// test("Update Review", () => {
//   render();
//   updateReview(1, "NewTitle", "NewBody").then((response) => {
//     fetchReviews("1").then((response) => {
//       expect(response.title).toEqual("NewTitle");
//     });
//   });
// });

// //9. Get one review
// test("Get One Review", () => {
//   render();
//   fetchReview("1").then((response) => {
//     fetchReviews("1").then((response) => {
//       expect(response.title).toEqual("NewTitle");
//     });
//   });
// });

// //10. Compare random words, truly random?
