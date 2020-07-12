import { useState, useContext } from 'react';
import { DispatchContext } from '../redux/contexts';

export default function AddNumbers() {
  const dispatch = useContext(DispatchContext);
  const [newNumber, setNewNumber] = useState('');

  const handleChange = e => {setNewNumber(e.target.value) };
  const handleClick = () => { 
    dispatch({ type: 'ADD_NUMBER', value: newNumber }); 
    setNewNumber('');
  };

  return <div>
    <input type="number" name="newValue" value={newNumber} onChange={handleChange}></input>
    <button onClick={handleClick}>ಠ_ಠ</button>

    <style jsx>{`
      div {
        display: flex;
        width: 300px;
        padding: 0.5em 1em;
        margin: 0 0 1em 0;
      }

      input {
        flex-grow: 1;
      }
      button {
        margin-left: 10px;
        padding: 0 1em;
      }
      `}</style>
  </div>
};