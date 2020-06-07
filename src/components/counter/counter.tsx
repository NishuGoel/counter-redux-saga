import React, { useState } from 'react';
import * as style from './counter.module.scss';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from '../../store/reducer';

const Counter = ({
  count,
  onIncrementAsync,
  onIncrement,
  onDecrement,
}: any) => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className={style.container}>
        <button className={style.increment} onClick={onIncrement}>
          +
        </button>
        <button className={style.decrement} onClick={onDecrement}>
          -
        </button>
        <button className={style.decrement} onClick={onIncrementAsync}>
          async
        </button>
      </div>
      <div className={style.displayValue}>{count}</div>
    </>
  );
};
const action = (type: any) => () => ({ type });
export const Counters = connect((state) => ({ count: state }), {
  onIncrement: action(INCREMENT),
  onDecrement: action(DECREMENT),
  onIncrementAsync: action(INCREMENT_ASYNC),
})(Counter);
