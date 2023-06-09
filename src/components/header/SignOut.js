import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import useFirebase from "../../hooks/use-firebase";


export default function SignOut() {
    const { firebase } = useFirebase();
    const history = useHistory();
    return <button
        type="button"
        title="Sign Out"
        onClick={() => {
            firebase.auth().signOut();
            history.push(ROUTES.LOGIN);
        }}
        onKeyDown={(event) => {
            if (event.key === "Enter") {
                firebase.auth().signOut();
                history.push(ROUTES.LOGIN);
            }
        }}
    >
        <svg
            className="w-8 mr-6 text-black-light cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
        </svg>
    </button>
}
