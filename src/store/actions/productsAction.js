 import React from 'react';


export const fetchAllProducts = (dispatch) => {
    return (dispatch) => {
        return {


        };
    }
}

async function getOneUserData(params,res) {
    try {
        let response = await fetch('http://localhost:5000/user/' + params);
        const json = await response.json();
        return json ;
    } catch (error){
        console.log(error);
    }
}

export {getOneUserData} ;