import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function AdminAccess() {
  useEffect(() => {
    document.title = "Admin Access";
  }, []);

  return (
    <>
      <Link to="/admin/access/users" className="btn btn-primary col-3 mx-1">
        Delete Users
      </Link>
      <Link to="/admin/access/reviews" className="btn btn-primary col-3">
        Delete Reviews
      </Link>
    </>
  );
}
