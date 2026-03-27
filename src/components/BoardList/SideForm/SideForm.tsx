import { useState } from 'react';
import type { FC, ChangeEvent } from 'react';
import { FiCheck } from 'react-icons/fi';
import { sideForm, input, icon } from './SideForm.css';
import { useTypedDispatch } from '../../../hooks/redux';
import { addBoard } from '../../../store/slices/boardsSlice';
import { v4 as uuid4 } from 'uuid';
import { addLog } from '../../../store/slices/loggerSlice';

type TSideFormProps ={
  inputRef: React.RefObject<HTMLInputElement | null>,
  setIsFormOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const SideForm: FC<TSideFormProps> = ({
  setIsFormOpen,
  //inputRef
}) => {
  const [inputText, setInputText] = useState('')
  const dispatch = useTypedDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }
  const handleOnBlur = () => {
    setIsFormOpen(false);
  }
  const handleClick = () => {
    if(inputText) {
      dispatch(
        addBoard({
          board: {
            boardId: uuid4(),
            boardName:inputText,
            lists: []
          }
        })
      )

      dispatch(
        addLog({
          logId: uuid4(),
          logMessage: `게시판 등록: ${inputText}`,
          logAuthor: "User",
          logTimestamp: String(Date.now())
        })
      )
    }
  }

  return (
    <div className={sideForm}>
      <input
        // ref={inputRef}
        autoFocus
        className={input}
        type="text"
        placeholder='새로운 게시판 등록하기'
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={icon} onMouseDown={handleClick}/>
    </div>
  )
}

export default SideForm