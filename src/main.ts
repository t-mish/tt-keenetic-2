import {data, Item} from "./data";
import {mergeSort} from "./sort";

function sortIPLikeString(data: Item[]) {
    return mergeSort(data, (left: Item, right: Item) => {
        if (left.ip === right.ip) {
            return left.name > right.name;
        }
        return left.ip < right.ip;
    })
}

function sortIP(data: Item[]) {
    return mergeSort(data, (left: Item, right: Item) => {
        if (left.ip === right.ip) {
            return left.name > right.name;
        }

        const leftBytes = left.ip.split('.').map(num => parseInt(num));
        const rightBytes = right.ip.split('.').map(num => parseInt(num));

        if (leftBytes[0] === rightBytes[0]) {
            if (leftBytes[1] === rightBytes[1]) {
                if (leftBytes[2] === rightBytes[2]) {
                    return leftBytes[3] < rightBytes[3];
                }
                return leftBytes[2] < rightBytes[2];
            }
            return leftBytes[1] < rightBytes[1];
        }
        return leftBytes[0] < rightBytes[0];
    })
}

console.log(sortIPLikeString(data));
console.log(sortIP(data));