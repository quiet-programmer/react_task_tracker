import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({
            text,
            day,
            reminder,
        })

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='Add Task'></input>
            </div>
            <div className='form-control'>
                <label>Day / Time</label>
                <input value={day} onChange={(e) => setDay(e.target.value)} type='text' placeholder='Add Day & Time'></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input value={reminder} onChange={(e) => setReminder(e.currentTarget.value)} type='checkbox'></input>
            </div>
            <input checked={reminder} className='btn btn-block' type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask
