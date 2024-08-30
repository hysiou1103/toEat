### toEat

Vue3 Composition API + TypeScript 的簡易練習，練習內容為跟著[Youtube]([https://code.visualstudio.com/](https://youtu.be/p1eO5dZnp_Q?si=BHp5PFsPyM6xr5V-)) 影片實作。

### as const, keyof, typeof 
- as const: 為常數斷言，是一種修飾符，表達某 variable 的類型是 不可變的
- keyof: return 類型的 key，並將其轉換為 union type
- typeof: 提取變數的 type

### Indexed Access Types: 用來取得特定屬性的型別
```
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"] // string
  type SomeType = Person["name"|"age"] // string | number
```
- 另一種用法是透過 number 去取得一個 array 元素值的所有類型
- [官方文件](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

