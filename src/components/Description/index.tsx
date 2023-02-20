import React from 'react'

type Props = {}

const Description = (props: Props) => {
  return (
    <div>
        Description:
        <ul>
            <li>you can select your item from the list by clicking on it</li>
            <li>you can add new item to list by writing the item in iput then pressing the enter key</li>
            <li>it use a custom hook for capchering the enter key press</li>
            <li>you can see your new item at the end of the list</li>
            <li>i added 2 lib , jss for styling and react-icons for the needed icons</li>
            <li>i also used typescript in the components</li>
        </ul>
    </div>
  )
}

export default Description