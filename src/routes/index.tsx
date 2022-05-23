import { useSelector } from "react-redux";
import { selectUser } from "../store/store";
import { UnauthorizedStack, AuthorizedStack } from "./RoutesStack";

function AppRoutes() {
  const { isAuth } = useSelector(selectUser);

  return <>{isAuth ? <AuthorizedStack /> : <UnauthorizedStack />}</>;
}
export default AppRoutes;
