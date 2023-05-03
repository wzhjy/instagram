import { useContext } from "react";
import FirebaseContext from "../context/firebase";

export default function useFirebase() {
    const { firebase } = useContext(FirebaseContext);
    return { firebase };
}
