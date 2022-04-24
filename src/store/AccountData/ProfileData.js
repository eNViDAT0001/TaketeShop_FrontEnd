import React, { Component } from 'react';

const apiGetAllUser = 'http://localhost:5000/user/getAllUser';
const apiLogin = 'http://localhost:5000/user/login';

async function getUserFromSever(){
    try{
        let response = await fetch(apiGetAllUser);
        let responseJson = await response.json();
        return responseJson;

    } catch (error){
        console.error('ERROR is : ${error}');
    }
}

async function getLogin(params){
    try{
        let response = await fetch(apiLogin,{
            method : 'POST',
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;

    } catch (error){
        console.error('ERROR is : ${error}');
    }

}



export {getUserFromSever};
export {getLogin};