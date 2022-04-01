export const required = (value:string) => {
    if (value) return undefined

    return "Field is Required"
}

export const lengthC = (maxLength:number) => (value:string) => {
    if (value.length > maxLength) return `MaxLength is ${maxLength} symbols`
    return undefined
}