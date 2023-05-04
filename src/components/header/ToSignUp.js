import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default function ToSignUp() {
  return <Link to={ROUTES.SIGN_UP}>
    <button
      type="button"
      className="font-bold text-sm rounded text-blue-medium w-20 h-8"
    >
      Sign Up
    </button>
  </Link>
}
