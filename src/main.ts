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

function sortIP1(data: Item[], mask: string) {
    const maskBytes: number[] = mask.split('.').map(num => parseInt(num));

    console.log(maskBytes)

    const resultMap: Map<string, Item[]> = new Map<string, Item[]>();

    data.forEach((item: Item) => {
        const ipBytes = item.ip.split('.').map(num => parseInt(num));

        const networkAddress: string = ipBytes.slice(0, 3)
            .map((value, index) => value & maskBytes[index])
            .join('.')

        console.log(networkAddress);

        const ips = [... (resultMap.get(networkAddress) ?? []), item];

        let index = ips!.length - 1;

        while (index > 0 && item.name > ips[index].name) {
            const temp = ips[index - 1];

            ips[index - 1] = item;
            ips[index] = temp;

            index--;
        }

        resultMap.set(networkAddress, ips);
    })

    return Array.from(resultMap.values());
}

console.log(sortIPLikeString(data));
console.log(sortIP(data));