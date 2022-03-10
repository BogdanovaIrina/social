export type NameType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
    id: number
}

const InitialState:InitialStateDialogType  = {
        names : [
            {name: 'Mike', id: 1},
            {name: 'Nick', id: 2},
            {name: 'Bob', id: 3},
            {name: 'Max', id: 4}
        ],
        messages : [
            {message: 'Hi', id: 1},
            {message: 'Good Hi', id: 2},
            {message: 'Bad Hi', id: 3},
            {message: 'Some Hi', id: 4}
        ],
        newMessage: ''
}

export type InitialStateDialogType  = {
    names : Array<NameType>
    messages: Array<MessageType>
    newMessage: string
}

export const dialogsReducer = (state:InitialStateDialogType = InitialState, action:DialogActionType):InitialStateDialogType  => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                newMessage : action.payload.Message
            }
        case "ADD-FULL-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {message: state.newMessage, id: 5}],
                newMessage:''
            }
        default: return state
    }
}
export const changeMessageAC = (Message:string)=> {
    return {
        type:"ADD-MESSAGE",
        payload: {
            Message
        }
    } as const
}

export const addMessageAC = () => {
    return {
        type:"ADD-FULL-MESSAGE",
    } as const
}


export type addMessageACType = ReturnType<typeof addMessageAC>

export type changeMessageACType = ReturnType<typeof changeMessageAC>

export type DialogActionType = addMessageACType | changeMessageACType
