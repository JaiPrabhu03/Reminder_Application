import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (reminder) => {
    return new Date(reminder.updated).toLocaleDateString()
}

let getTitle = (reminder) => {

    let title = reminder.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}


let getContent = (reminder) => {
    let title = getTitle(reminder)
    let content = reminder.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }
}


const ListItem = ({ reminder }) => {
    return (
        <Link to={`/reminder/${reminder.id}`}>
            <div className="reminders-list-item" >
                <h3>{getTitle(reminder)}</h3>
                <p><span>{getTime(reminder)}</span>{getContent(reminder)}</p>
            </div>

        </Link>
    )
}

export default ListItem
