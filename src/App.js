import { useState, useEffect } from 'react'
import Checkbox from './components/Checkbox/Checkbox'
import './App.css'
import SearchGithubUser from './components/SearchGithub/SearchGithubUser'

function App() {

  const items = [
    { id: '1', label: 'item 1' },
    { id: '2', label: 'item 2' },
    { id: '3', label: 'item 3' },
    { id: '4', label: 'item 4' },
  ]

  const [isCheckAll, setIsCheckAll] = useState(false) //handle state "select All"
  const [isCheck, setIsCheck] = useState([]) //handle others checkbox


  useEffect(() => {
    if (items) setIsCheckAll(isCheck.length === items.length)
  }, [isCheck])      // eslint-disable-line react-hooks/exhaustive-deps

  //handle event from selectAll checkbox
  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(items.map(i => i.id))
    isCheckAll && setIsCheck([])
  }

  //handle event from others checkbox
  const handleClick = e => {
    const { id, checked } = e.target
    let newChecked = [...isCheck, id]
    newChecked = [...new Set(newChecked)]
    setIsCheck(newChecked)
    !checked && setIsCheck(newChecked.filter(i => i !== id))
  }




  return (
    <div className="App">
      <div>
        <h1>
          Checkboxes
        </h1>
        <Checkbox
          name="selectAll"
          id="selectAll"
          onChange={handleSelectAll}
          checked={isCheckAll}
        />
        {items.map(({ id, label }) =>
          <Checkbox
            key={id}
            name={label}
            id={id}
            onChange={handleClick}
            checked={isCheck.includes(id)}
          />)}
      </div>
      <SearchGithubUser />
    </div>
  )
}

export default App