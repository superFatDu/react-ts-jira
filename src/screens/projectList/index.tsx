import React from "react"
import {useEffect, useState} from "react"
import {List} from "./list"
import {SearchPanel} from "./SearchPanel"
import {useMount} from "../../utils";

export const ProjectList: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async res => {
      if (res.ok) setList(await res.json())
    })
  }, [param, apiUrl])
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) setUsers(await res.json())
    })
  })
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}/>
      <List list={list} users={users}/>
    </div>
  )
}
