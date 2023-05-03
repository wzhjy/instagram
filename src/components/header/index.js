import { useContext } from "react";
import UserContext from "../../context/user";
import useUser from "../../hooks/use-user";
import Logo from './logo';
import ToDash from "./ToDash";
import SignOut from "./SignOut";
import ToProfile from "./ToProfile";
import ToLogin from "./ToLogin";
import ToSignUp from "./ToSignUp";

export default function Header() {
  const { user: loggedInUser } = useContext(UserContext);
  const { user } = useUser(loggedInUser?.uid);


  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <Logo />
          <div className="text-gray-700 text-center flex items-center align-items">
            {loggedInUser ? (
              <>
                <ToDash />
                <SignOut/>
                {user && (
                  <ToProfile user={user}/>
                )}
              </>
            ) : (
              <>
                <ToLogin />
                <ToSignUp />


              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
