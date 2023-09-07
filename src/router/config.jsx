import { useSelector } from "react-redux";
import { PrivateRoute } from "./privateRouter";
import PageLoading from "../pages/loading";

const WrapComponentRoute = ({ auth, element }) => {
  const { loadingInfo } = useSelector((state) => state.auth);
  if (loadingInfo) {
    return <PageLoading />;
  }
  if (auth) return <PrivateRoute element={element} />;
  return element;
};

export default WrapComponentRoute;