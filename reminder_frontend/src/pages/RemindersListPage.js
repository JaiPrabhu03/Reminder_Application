import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


const RemindersListPage = () => {

    let [reminders, setReminders] = useState([])

    useEffect(() => {
        getReminders()
    }, [])


    let getReminders = async () => {

        let response = await fetch('/reminder_api/reminders/')
        let data = await response.json()
        setReminders(data)
    }

    return (
        <div className="reminders">
            <div className="reminders-header">
                <h2 className="reminders-title">&#9782; Reminders</h2>
                <p className="reminders-count">{reminders.length}</p>
            </div>

            <div className="reminders-list">
                {reminders.map((reminder, index) => (
                    <ListItem key={index} reminder={reminder} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default RemindersListPage
