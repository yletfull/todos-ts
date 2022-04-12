import React from "react";
import { useSelector } from "react-redux";

function UsersList(){

    const state = useSelector((state) => state);
    console.log(state);

    return (
        <div>
            123
        </div>
    )
}

export default UsersList;