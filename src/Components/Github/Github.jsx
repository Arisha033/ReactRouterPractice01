import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()
  // ******fetch data on page load******

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Arisha033')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //     })
  // }, [])

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </>
  )
}

export default Github

// ******fetch data on hover and store it in cache*******
export const githubInfoLoader = async () => {
  // Call the GitHub API and retrieve info for a user named "Arisha033"
  const response = await fetch(`https://api.github.com/users/Arisha033`)
  return response.json()
}
