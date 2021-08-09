import React from "react"

export interface ListProps {
  list: { id: number, name: string, personName: string, personId: number }[],
  users: { name: string, id: number }[]
}

export const List: React.FC<ListProps> = ({list, users}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
      </thead>
      <tbody>
      {list.map(pro => (
        <tr key={pro.id}>
          <td>{pro.name}</td>
          <td>{users.find(user => user.id === pro.personId)?.name || 'unknown'}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}