function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
// GET x amount of random words
export function fetchRandomWords() {
  return _fetch("https://random-word-api.herokuapp.com/word?number=1");
}
// GET translated verson of given word
export function fetchTranslatedWords(word) {
  return _fetch(
    `https://api.mymemory.translated.net/get?q=${word}!&langpair=en|es`
  );
}
// GET all reviews
export function fetchReviews() {
  return _fetch("http://localhost:3000/reviews");
}
// GET all users
export function fetchUsers() {
  return _fetch("http://localhost:3000/users");
}
// GET one review
export function fetchReview(reviewId) {
  return _fetch(`http://localhost:3000/reviews/${reviewId}`);
}
// POST review to mock API
export function saveReview(title, body, name) {
  return fetch("http://localhost:3000/reviews", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
      userName: name,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}
// PATCH edited review into reviews
export function updateReview(reviewId, updatedTitle, updatedBody) {
  return fetch(`http://localhost:3000/reviews/${reviewId}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: updatedTitle,
      body: updatedBody,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}
//DELETE review
export function deleteReview(reviewId) {
  return fetch(`http://localhost:3000/reviews/${reviewId}`, {
    method: "DELETE",
  });
}
//DELETE user
export function deleteUser(userId) {
  return fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
  });
}
