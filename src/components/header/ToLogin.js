import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ToLogin() {
    return <Link to={ROUTES.LOGIN}>
        <button
            type="button"
            className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
        >
            Log In
        </button>
    </Link>
}
