import React from "react";
import { useArray } from "../../utils";

export const HandleArray: React.FC = () => {
  const list: { name: string, age: number }[] = [
    { name: 'jack', age: 22 },
    { name: 'rose', age: 18 }
  ]
  const { value, add, remove, clear } = useArray(list)
  return (
    <div>
      <div className="btns">
        <button onClick={() => add({ name: 'john', age: 12 })}>add item</button>
        <button onClick={() => remove(0)}>remove0</button>
        <button onClick={() => clear()}>clear array</button>
      </div>
      <div className="itme-list">
        {
          value.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))
        }
      </div>
    </div>
  )
}