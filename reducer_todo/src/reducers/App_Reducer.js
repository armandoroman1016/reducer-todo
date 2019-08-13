
export const initialState = { list : [] }

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                list : [...state.list , {...action.payload, id: Date.now()} ],
        };
        case 'TOGGLE_ITEM':
            return {
                ...state,
                list : state.list.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, completed: !item.completed }
                    } else {
                        return item;
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return{
                ...state,
                list : state.list.filter(item => !item.completed)
            }
        default : return state
    }
}