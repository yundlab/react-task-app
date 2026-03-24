import{ useDispatch, type TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useTypedSelector:TypedUseSelectorHook<RootState>= useSelector;
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
