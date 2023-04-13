import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const ReminderPage = ({ match, history }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  let reminderId = match.params.id;
  let [reminder, setReminder] = useState(null);

  useEffect(() => {
    getReminder();
  }, [reminderId]);

  let getReminder = async () => {
    if (reminderId === "new") return;

    let response = await fetch(`/reminder_api/reminders/${reminderId}/`);
    let data = await response.json();
    setReminder(data);
  };

  let createReminder = async () => {
    fetch(`/reminder_api/reminders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reminder),
    });
  };

  let updateReminder = async () => {
    fetch(`/reminder_api/reminders/${reminderId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reminder),
    });
  };

  let deleteReminder = async () => {
    fetch(`/reminder_api/reminders/${reminderId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  let handleSubmit = () => {
    console.log("Reminder:", reminder);
    if (reminderId !== "new" && reminder.body == "") {
      deleteReminder();
    } else if (reminderId !== "new") {
      updateReminder();
    } else if (reminderId === "new" && reminder.body !== null) {
      createReminder();
    }
    history.push("/");
  };

  let handleChange = (value) => {
    setReminder((reminder) => ({ ...reminder, body: value }));
    console.log("Handle Change:", reminder);
  };

  return (
    <div className="reminder">
      <div className="reminder-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {reminderId !== "new" ? (
          <button onClick={deleteReminder}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <div> Add a Reminder</div>
      <textarea
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={reminder?.body}
      >
  
      </textarea>
    </div>
  );
};

export default ReminderPage;
