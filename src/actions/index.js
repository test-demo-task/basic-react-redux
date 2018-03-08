// noinspection JSAnnotator
import axios from 'axios';
import {FETCH_USER} from '../constants/types';

export const submitSurvey = (values, history) => async dispatch => {
    // const res = await axios.post('/api/surveys', values);
    console.log('inside action submitsurvey')
    // history.push('/surveys');
    // dispatch({type: FETCH_USER, payload: res.data})
}

