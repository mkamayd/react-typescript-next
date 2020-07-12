import { useState, useContext, useEffect } from 'react';
import { DispatchContext } from '../redux/contexts';
import fetchDataSet from '../redux/fetchDataSet';

export default function LoadData() {
  const dispatch = useContext(DispatchContext);
  const [index, setIndex] = useState(0);
  const dataSetIds = ['small', '1234', '4321'];

  const selectNextDataSet = () => {
    fetchDataSet(dataSetIds[index])(dispatch);
    setIndex((index + 1) % dataSetIds.length);
  };

  useEffect(() => {
    selectNextDataSet();
  }, []);

  return <div>
    <button onClick={selectNextDataSet}>Load Set <strong>{dataSetIds[index]}</strong></button>
    <style jsx>{`
   button{
     font-size: 21px;
     padding: 5px 20px;
  }
      `}</style>
  </div>
};