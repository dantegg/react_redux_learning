/**
 * Created by dantegg on 16-9-23.
 */
export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM'

export function addItem(text) {
    return{
        type:ADD_ITEM,
        text:text
    }
}

export function delItem(index) {
    return{
        type:DEL_ITEM,
        index:index
    }
}