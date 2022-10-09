import { createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ user }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = () => { };

    const register = () => { };

    const logout = () => { };
}