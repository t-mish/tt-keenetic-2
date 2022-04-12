# Решение тестового задания №2

Необходимо написать функцию, которая определенным образом сортирует массив объектов.

В каждом объекте есть два строковых свойства: `ip` и `name`. Функция должна вернуть объект, отсортированный следующим образом:

-	По возрастанию `ip` (сравнивать как строки)
-	(при совпадении `ip`) по убыванию `name`

Функция принимает массив и возвращает отсортированный массив. Проверка на корректность входных данных не нужна; каждый объект в массив имеет строковые свойства `ip` и `name`.

```
Пример:
// исходный массив
const list = [
  { ip: '192.168.22.1', name: 'zzz' },
  { ip: '5.220.100.50', name: 'quuz' },
  { ip: '5.24.69.2', name: 'foo' },
  { ip: '5.24.69.2', name: 'foo' },
  { ip: '5.220.100.50', name: 'bar' },
  { ip: '192.168.22.1', name: 'foo' },
  { ip: '5.220.100.50', name: 'baz' },
  { ip: '5.220.100.50', name: 'foo' },
  { ip: '192.168.22.1', name: 'aaa' },
];

// отсортированный массив
const expected = [
  { ip: '192.168.22.1', name: 'zzz' },
  { ip: '192.168.22.1', name: 'foo' },
  { ip: '192.168.22.1', name: 'aaa' },
  { ip: '5.220.100.50', name: 'quuz' },
  { ip: '5.220.100.50', name: 'foo' },
  { ip: '5.220.100.50', name: 'baz' },
  { ip: '5.220.100.50', name: 'bar' },
  { ip: '5.24.69.2', name: 'foo' },
  { ip: '5.24.69.2', name: 'foo' },
];

```

[*] вариант со звездочкой: отсортировать IP-адреса как IP-адреса ([сравнение IP-адресов](https://ru.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B5%D1%81#%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5))
