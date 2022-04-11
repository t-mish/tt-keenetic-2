export function mergeSort<T>(array: T[], compare: (left: T, right: T) => boolean): T[] {
    const half: number = array.length / 2;

    if (array.length < 2){
        return array;
    }

    const left: T[] = array.slice(0, half);
    const right: T[] = array.slice(half, array.length);

    return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

export function merge<T>(left: T[], right: T[], compare: (left: T, right: T) => boolean): T[] {
    let arr: T[] = []

    while (left.length && right.length) {
        if (compare(left[0], right[0])) {
            arr.push(left.shift()!)
        } else {
            arr.push(right.shift()!)
        }
    }

    return [ ...arr, ...left, ...right ]
}