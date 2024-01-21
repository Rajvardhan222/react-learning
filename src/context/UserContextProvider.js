import React, { useState } from "react";
import my from "./UserContext";

const myProvidern = ({children}) => {
    let [user,setUser] = useState({})
    return (
        <my.Provider value={{user,setUser}}>
        {children}
        </my.Provider>
    )
}

export default n