import { Link } from "react-router-dom";
import { DEFAULT_IMAGE_PATH } from "../constants/paths";

export default function ToProfile(props) {
    const { user } = props;
    return <div className="flex items-center cursor-pointer">
        <Link to={`/p/${user?.username}`}>
            <img
                className="rounded-full h-8 w-8 flex"
                src={`/images/avatars/${user?.username}.jpg`}
                alt={`${user?.username} profile`}
                onError={(e) => {
                    e.target.src = DEFAULT_IMAGE_PATH;
                }}
            />
        </Link>
    </div>
}
