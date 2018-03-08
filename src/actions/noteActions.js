import * as types from '../constants/types';
import * as api from '../tools/apiConfig';
import axios from 'axios';
import history from '../history';

export function addNote(data) {
    debugger
    return function (dispatch, getState) {
        axios.post(api.ADD_NOTE, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                debugger
                if (response.data.status == 200) {
                    return dispatch({ type: types.ADD_NOTE_SUCCESS, note: response.data.data })
                } else if (response.data.status == 403) {
                    // localStorage.clear();
                    // browserHistory.push('/signin');
                    // toastr.error(response.data.message);
                }
                else {
                    // toastr.error(response.data.message);
                }
            })
            .catch(function (error) {
            });
    }
}

export function getNotes(userId) {
    debugger
    return function (dispatch, getState) {
        axios.get(api.GET_NOTES + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                debugger
                if (response.data.status == 200) {
                    return dispatch({ type: types.GET_NOTES, notes: response.data.notes })
                } else if (response.data.status == 201) {
                    // localStorage.clear();
                    // browserHistory.push('/signin');
                    // toastr.error(response.data.message);
                }
                else {
                    // toastr.error(response.data.message);
                }
            })
            .catch(function (error) {
            });
    }
}

export function deleteNote(userId) {
    debugger
    return function (dispatch, getState) {
        axios.get(api.DELETE_NOTE + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                debugger
                if (response.data.status == 200) {
                    return dispatch({ type: types.DELETE_NOTE_SUCCESS, noteId: userId })
                } else if (response.data.status == 201) {
                    // localStorage.clear();
                    // browserHistory.push('/signin');
                    // toastr.error(response.data.message);
                }
                else {
                    // toastr.error(response.data.message);
                }
            })
            .catch(function (error) {
            });
    }
}

export function updateNote(data) {
    debugger
    return function (dispatch, getState) {
        axios.post(api.UPDATE_NOTE, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(function (response) {
                debugger
                if (response.data.status == 200) {
                    return dispatch({ type: types.UPDATE_NOTE_SUCCESS, updatedNote: response.data.updatedNote })
                } else if (response.data.status == 403) {
                    // localStorage.clear();
                    // browserHistory.push('/signin');
                    // toastr.error(response.data.message);
                }
                else {
                    // toastr.error(response.data.message);
                }
            })
            .catch(function (error) {
            });
    }
}