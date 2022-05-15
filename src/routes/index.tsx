import { useSelector } from "react-redux";
import { selectUser } from "../store/store";
import { UnauthorizedStack, AuthorizedStack } from "./RoutesStack";

function AppRoutes() {
  const { token } = useSelector(selectUser);
  return <>{token ? <AuthorizedStack /> : <UnauthorizedStack />}</>;
}
export default AppRoutes;
