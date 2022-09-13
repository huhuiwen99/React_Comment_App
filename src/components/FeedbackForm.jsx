import Card from "../shared/Card"
import {useState} from 'react'


function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2> How would you rate your service with us?</h2>
                {/* To do - rating select */}
                <div className="input-group">
                    <input  onChange={handleTextChange} className="text" placeholder="Write a review"></input>
                    <button type="submit">Send</button>

                </div>
            </form>
            FeedbackForm
        </Card>
    )
}

export default FeedbackForm