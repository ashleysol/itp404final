import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  redirect,
  Outlet,
} from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Root from "./routes/Root";
import Index from "./routes/Index";
import Game from "./routes/Game";
import NotFound from "./routes/NotFound";
import Admin from "./routes/Admin";
import AdminPassword from "./components/AdminPassword";
import {
  fetchRandomWords,
  fetchReviews,
  saveReview,
  fetchReview,
  updateReview,
  deleteReview,
  fetchUsers,
} from "./api";
import Reviews from "./routes/Reviews";
import NewReview from "./routes/NewReview";
import EditReview from "./routes/EditReview";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";
import AdminAccess from "./components/AdminAccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
        loader() {
          return fetchReviews();
        },
        children: [
          {
            path: "/reviews",
            element: (
              <Link to="/reviews/new" className="btn btn-primary col-3">
                Write a Review
              </Link>
            ),
          },
          {
            path: "/reviews/new",
            element: <NewReview />,
            action({ request }) {
              return request.formData().then((formData) => {
                return saveReview(
                  formData.get("title"),
                  formData.get("review"),
                  formData.get("name")
                ).then(() => {
                  toast.success("Your review was posted successfully.");
                  return redirect(`/reviews`);
                });
              });
            },
          },
        ],
      },
      {
        path: "/reviews/:reviewId/edit",
        element: <EditReview />,
        loader({ params }) {
          return fetchReview(params.reviewId);
        },
        action({ request, params }) {
          return request.formData().then((formData) => {
            return updateReview(
              params.reviewId,
              formData.get("title"),
              formData.get("review"),
              formData.get("name")
            ).then(() => {
              toast.success("Your review was edited successfully.");
              return redirect(`/reviews`);
            });
          });
        },
      },
      {
        path: "/reviews/:reviewId/delete",
        element: <p>deleted</p>,
        loader({ params }) {
          return deleteReview(params.reviewId).then(() => {
            toast.success("Your comment was deleted sucessfully.");
            return redirect(`/reviews`);
          });
        },
      },
      {
        path: "/admin",
        element: (
          <>
            <h1>Admin</h1> <Outlet />
          </>
        ),
        children: [
          {
            path: "/admin",
            element: <AdminPassword />,
            action({ request, params }) {
              return request.formData().then((formData) => {
                if (formData.get("password") === "password") {
                  toast.success("You have been granted admin access.");
                  return redirect(`/admin/access`);
                } else {
                  toast.error("Access denied: wrong password.");
                  return redirect(`/admin`);
                }
              });
            },
          },
          {
            path: "/admin/access",
            element: <AdminAccess />,
          },
          {
            path: "/admin/access/reviews",
            loader() {
              return fetchReviews();
            },
            element: <Admin type="Reviews" />,
          },
          {
            path: "/admin/access/users",
            loader() {
              return fetchUsers();
            },
            element: <Admin type="Users" />,
          },
          {
            path: "/admin/access/reviews/delete/:selectedItems",
            element: (
              <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ),
          },
        ],
      },
      {
        path: "/game",
        element: <Game />,
        loader() {
          return fetchRandomWords();
        },
        // children: [
        //   {
        //     path: "/game/:word",
        //     element: <Question />,
        //     loader({ params }) {
        //       return fetchTranslatedWords(params.word);
        //     }
        //   }
        // ]
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
