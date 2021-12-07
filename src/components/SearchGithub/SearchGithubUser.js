import React, { useEffect, useState } from 'react'
import { UserCard } from './UserCard/UserCard'
import './CardContainer.css'

const SearchGithubUser = () => {

  const [inputUser, setInputUser] = useState('')
  const [listUsers, setListUsers] = useState([])
  const [error, setError] = useState(false)

  //Fetch github api to get users
  useEffect(() => {
    const handleGitHubFetchApi = async () => {
      setError(false)
      //Token is not mandatory but without it, user are allowed to do only 10 request per minute
      const token = process.env.REACT_APP_ACCESS_TOKEN

      if (inputUser) {
        const response = await fetch(
          'https://api.github.com/search/users?q=' + inputUser,
          { headers: { authorization: token && 'token ' + token } }
        )

        if (response.status === 403) {
          return setError({
            code: 403,
            message: 'API rate limit exceeded, please come back later '
          })
        } else {
          const data = await response.json()
          return setListUsers(data.items)
        }

      }

    }
    handleGitHubFetchApi()

  }, [inputUser])

  return (
    <div>
      <h1>Github user search</h1>

      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Enter a name"
        onChange={(e) => setInputUser(e.target.value)}
        size="20"
      />

      <div className={error ? 'Error' : 'CardContainer'}>
        {!error

          ? listUsers.length > 0
            ? listUsers.map((e, index) => {
              return (
                <UserCard
                  name={e.login}
                  avatar={e.avatar_url}
                  key={e.login + index}
                />)
            })
            : <p>No result</p>
          : <p>{error.message} </p>
        }
      </div>
    </div>
  )
}

export default SearchGithubUser

/**
 Query against Github Api: GET https://api.github.com/search/users?q={USER}.
 Try to not add any dependency library on a freshly created create react app.
 Don't forget to check against modern ways to make HTTP requests on frontend side.
 Bonus: manage edge cases (no results, github api rate limit)
 */