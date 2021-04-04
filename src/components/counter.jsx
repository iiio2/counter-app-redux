// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, minus } from '../store/action';

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={() => dispatch(add())}>+</button>
      <br />
      <button onClick={() => dispatch(minus())}>-</button>
    </div>
  );
};

export default Counter;
