import { NumbersAction} from './reducer';
import { Dispatch } from 'react';

export default function fetchDataSet(id:string) {
    return (dispatch:Dispatch<NumbersAction>) => {
      dispatch({type:'REQUEST_SET'});
      return fetch(`/api/numbers/${id}`)
        .then(response => response.json())
        .then(json => json.data)
        .then(numbers => dispatch({type:'RECEIVE_SET', numbers}))
    }
  }