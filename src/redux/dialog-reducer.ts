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
        ]
}

export type InitialStateDialogType  = {
    names : Array<NameType>
    messages: Array<MessageType>
}

export const dialogsReducer = (state:InitialStateDialogType = InitialState, action:DialogActionType):InitialStateDialogType  => {
    switch (action.type) {
        case "ADD-FULL-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {message: action.newMessage, id: 5}]
            }
        default: return state
    }
}

export const addMessageAC = (newMessage:string) => {
    return {
        type:"ADD-FULL-MESSAGE",
        newMessage
    } as const
}


export type addMessageACType = ReturnType<typeof addMessageAC>

export type DialogActionType = addMessageACType
