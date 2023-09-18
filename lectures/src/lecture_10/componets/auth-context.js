import React, {useEffect, useState} from "react"


export const AuthProvider = function AuthProvider(props) {
    const [isLogged, setLoging] = useState(false)

    function onLoginHandler(email,password){
        console.log('Email :' + email + " Password :" + password)
        localStorage.setItem('LoggedIn',"1")
        setLoging(true)
    }

    function onLogout(){
        localStorage.removeItem('LoggedIn')
        setLoging(false)
    }

    useEffect(()=>{
        let logged = localStorage.getItem('LoggedIn')
        if (logged === "1"){
            setLoging(true)
        }


    },[])



    return <AuthContext.Provider 
    value={
        {isLoggedIn:isLogged,
        logout: onLogout,
        login:onLoginHandler,
    }

    }
    >{props.children}</AuthContext.Provider>
}

const AuthContext = React.createContext({
    isLoggedIn : false,
    login: (email,password) =>{},
    logout: () => {}
})
export default AuthContext;