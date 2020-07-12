export type RequestAction = {type:'REQUEST_SET'};
export type ReceiveAction = {type:'RECEIVE_SET', numbers:number[]};
export type AddAction = {type:'ADD_NUMBER', value:string|number};
export type NumbersAction = RequestAction | ReceiveAction | AddAction;
export type NumbersState = {isFetching:boolean, numbers:number[]}
export default (state: NumbersState, action:NumbersAction) => {
  switch (action.type) {
    case 'REQUEST_SET':
      return {
        ...state,
        isFetching: true,
        numbers: []
      };
    case 'RECEIVE_SET':
      return {
        ...state,
        isFetching: false,
        numbers: action.numbers
      };
    case 'ADD_NUMBER':
      return {
        ...state,
        numbers: [...state.numbers, Number(action.value)]
      };
    default:
      throw new Error();
  }
}