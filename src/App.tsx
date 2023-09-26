import { decrement, increment, incrementByAmount } from './redux/featurs/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
  const count = useAppSelector((state) => state.Counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="flex m-8">
          <button onClick={()=>dispatch(increment())} className="border-double border-4 border-sky-500 px-3 py-1">Increment</button>
          <div className="mx-4">{count}</div>
          <button  onClick={()=>dispatch(decrement())} className="border-double border-4 border-sky-500 px-3 py-1 mx-4">Decrement</button>

          <button  onClick={()=>dispatch(incrementByAmount(5))} className="border-double border-4 border-sky-500 px-3 py-1">Increment by value</button>
      </div>
    </>
  );
}

export default App;
