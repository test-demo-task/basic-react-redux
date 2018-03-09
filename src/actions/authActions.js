import * as types from '../constants/types';
import * as api from '../tools/apiConfig';
import axios from 'axios';
import history from '../history';
export function signUp(data) {
    debugger
    return function (dispatch, getState) {
        axios.post(api.SIGN_UP, data)
            .then(function (response) {
                if (response.data.status == 200) {
                    return dispatch({ type: types.SIGN_UP_SUCCESS, signup: { signup: 'success' } });
                } else {
                    return dispatch({ type: types.SIGN_UP_SUCCESS, signup: { signup: 'success' } });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function signIn(data) {
    return function (dispatch, getState) {
        axios.post(api.SIGN_IN, data)
            .then(function (response) {
                if (response.data.status == 200) {
                    localStorage.setItem('email', response.data.data.email)
                    localStorage.setItem('userId', response.data.data._id)
                    localStorage.setItem('token', response.data.token)
                    return dispatch({ type: types.SIGN_IN_SUCCESS, signin: { signin: 'success' } });
                } else {
                    return dispatch({ type: types.SIGN_IN_SUCCESS, signin: { signin: '' } });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
