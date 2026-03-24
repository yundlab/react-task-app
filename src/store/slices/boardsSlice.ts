import { createSlice } from "@reduxjs/toolkit";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];
}

const initialState : TBoardState= {
    modalActive: false,
    boardArray: [
        {
            boardId: "board-0",
            boardName: "첫 번째 게시물",
            listArray: [
                {
                    listId: "list-0",
                    listName: "List 1",
                    task : [
                        {
                            taskId: "task-0",
                            taskName: "Task 1",
                            taskDescription: "Description",
                            taskOwner: "yun"
                        },
                        {
                            taskId: "task-1",
                            taskName: "Task 2",
                            taskDescription: "Description",
                            taskOwner: "yun"        
                        }
                    ]
                },
                {
                    listId: "list-1",
                    listName: "List 2",
                    task : [
                        {
                            taskId: "task-3",
                            taskName: "Task 3",
                            taskDescription: "Description",
                            taskOwner: "yun"
                        }
                    ]
                }
            ]
        }
    ]
}

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {

    }
})

export const boardsReducer = boardsSlice.reducer;