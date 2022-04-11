export interface Item {
    ip: string;
    name: string;
}

export const data: Item[] = [
    { ip: '192.168.22.1', name: 'zzz' },
    { ip: '5.220.100.50', name: 'quuz' },
    { ip: '5.24.69.2', name: 'foo' },
    { ip: '5.24.69.2', name: 'foo' },
    { ip: '5.220.100.50', name: 'bar' },
    { ip: '192.168.22.1', name: 'foo' },
    { ip: '5.220.100.50', name: 'baz' },
    { ip: '5.220.100.50', name: 'foo' },
    { ip: '192.168.22.1', name: 'aaa' },
]