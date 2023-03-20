const { createContext, useState, useContext, useEffect } = require("react");

const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:"MD. RAJON AHAMAD",
        token:"rajonkka8928282"
    });
    // useEffect(()=>{
    //     const data = localStorage.getItem("auth");
    //   if (data) {
    //     const parsed = JSON.parse(data);
    //     setAuth({ ...auth, user: parsed.user, token: parsed.token });
    //   }
    // },
    // []);

    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth=()=>useContext(AuthContext);
export {useAuth,AuthProvider}