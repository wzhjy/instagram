import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default function Logo() {
    return <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
        <h1 className="flex justify-center w-full">
            <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <img
                    src="/images/logo.png"
                    alt="Instagram"
                    className="mt-2 w-6/12"
                />
            </Link>
        </h1>
    </div>
}