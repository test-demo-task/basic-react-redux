
//constants for api URL
// var BASEURL = "http://172.10.233.57:6767/";
var BASEURL = "https://notetakingapptask.herokuapp.com/";
// var BASEURL = url.PRODUCTION_API_URL;

export const SIGN_UP = BASEURL + 'users/register';
export const SIGN_IN = BASEURL + 'users/login';
export const ADD_NOTE = BASEURL + 'notes/addNote';
export const GET_NOTES = BASEURL + 'notes/getallNotes';
export const DELETE_NOTE = BASEURL + 'notes/deleteNote';
export const UPDATE_NOTE = BASEURL + 'notes/updateNote';
export const GET_NOTE_DETAIL = BASEURL + 'notes/getNoteById';