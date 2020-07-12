
import { createContext, Dispatch } from 'react';
import {NumbersAction} from './reducer';

const StateContext = createContext({numbers:[], isFetching:true});
const DispatchContext = createContext({} as Dispatch<NumbersAction>);

export {StateContext, DispatchContext}
