import { createContext, useState } from "react"
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is Feedback 2',
            rating: 7,
        },
        {
            id: 1,
            text: 'These feedbacks are generated defaultly.',
            rating: 5,
        },
        ])

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delelte?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
          }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    return(
    <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback}}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext