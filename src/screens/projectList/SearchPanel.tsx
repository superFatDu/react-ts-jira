import React from "react"

export interface SearchPanelProps {
  param: {
    name: string,
    personId: string
  },
  setParam: (param: SearchPanelProps['param']) => void,
  users: { name: string, id: number }[]
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ param, setParam, users }) => {
  return (
    <form>
      <input type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value
      })} />
      <select value={param.personId} onChange={evt => setParam({
        ...param,
        personId: evt.target.value
      })}>
        <option value={''}>负责人</option>
        {
          users.map((item, index) => (
            <option value={item.id} key={'user' + index}>{item.name}</option>
          ))
        }
      </select>
    </form>
  )
}