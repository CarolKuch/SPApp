export const minLenght = min => value => {
    if (typeof value === 'string'){
        return value.length < min;
    }
    return true;
};