/**
 * Created by dantegg on 16-9-12.
 */
export const RED_COLOR = 'RED_COLOR'
export const GREEN_COLOR = 'GREEN_COLOR'
export const BLUE_COLOR = 'BLUE_COLOR'


export function redColor(e) {
    console.log('zzz',e)
    return{
        type:RED_COLOR,
        rednum:parseInt(e)
    }
}


export function greenColor(e) {
    return{
        type:GREEN_COLOR,
        greennum:parseInt(e)
    }
}

export function blueColor(e) {
    return{
        type:BLUE_COLOR,
        bluenum:parseInt(e)
    }
}
