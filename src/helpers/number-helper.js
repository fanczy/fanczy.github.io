export const limitNumber = (min, max) => (number) => {
    if(number < min)
        return min;

    if(number > max)
        return max;

    return number;
}