import{ useDispatch, type TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store'; // 왜 나는 type을 넣어야하지?

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();


// interface Obj<T> {
//     name : T;
// }

// interface State {
//     state: {
//         data: string,
//         loadoing: boolean
//     }
// }

// const obj : State = {
//     name : {
//         state: {
//             date: 'abcd',
//             loading: false
//         }
//     }
// }
