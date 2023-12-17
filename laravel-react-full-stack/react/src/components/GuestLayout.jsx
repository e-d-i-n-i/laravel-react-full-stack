import {useStateContext} from "../contexts/ContextProvider";
import {Link, Navigate, Outlet} from "react-router-dom";

export default function GuestLayout (){
    const { user, token } = useStateContext();

    if (token) {
      return <Navigate to="/" />;
    }
    return (
      <div>
        <div>
        <Outlet />
      </div>
      </div>
    )
}