import { Link } from "react-router-dom";
import { authUser } from "../../store/auth";
import { useSelector } from "react-redux";
function HomePage() {
  let abc = "";
  const user = useSelector(authUser);
  let content = null;
  if (user && user.id) {
    content = (
      <>
        <Link
          to="/species"
          className="a text-decoration-none"
          style={{
            display: "inline-flex",
            height: "36px",
            padding: "0 16px",
            color: "#fff",
            fontWeight: "bold",
            alignItems: "center",
            cursor: 'pointer'
          }}
        >
          {user.name}
        </Link>
      </>
    );
  } else {
    content = (
      <>
        <Link
          to="/species"
          className="a text-decoration-none"
          style={{
            display: "inline-flex",
            height: "36px",
            padding: "0 16px",
            color: "#fff",
            fontWeight: "bold",
            alignItems: "center",
            cursor: 'pointer'
          }}
        >
          Đăng nhập
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="fillHeight">
        <div
          style={{
            height: "45px",
            backgroundColor: "#AD180D",
            alignItems: "center",
          }}
          className="a d-flex justify-content-end"
        >
          <div
            style={{
              height: "100%",
              paddingRight: "64px",
              alignItems: "center",
            }}
            className=" a d-flex "
          >
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
