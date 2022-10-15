import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password, name, location) => {
        return register_db(email, password, name, location);
    }

    const login = (email, password) => {
        return login_db(email, password);
    }

    const logout = () => {
        return logout_db();
    }

    useEffect(() => {
        const subscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return subscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, register, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    )
};

const login_db = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const register_db = async (email, password, name, location) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(firestore, "users"), {
            uid: user.uid,
            name: name,
            location: location,
            email: email,
            role: "CLIENT",
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout_db = () => {
    signOut(auth);
};