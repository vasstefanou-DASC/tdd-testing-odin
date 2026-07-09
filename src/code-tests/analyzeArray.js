export function analyze(arr) {
    const arrObj = {
        average: arr.reduce((prev,cur) => (prev+cur),0)/arr.length,
        min: arr.reduce((min,cur) => (cur < min ? cur : min), arr[0]),
        max: arr.reduce((max,cur) => (cur > max ? cur : max), arr[0]),
        length: arr.length
    }
    return arrObj;
}