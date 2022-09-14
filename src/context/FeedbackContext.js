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
            id: 3,
            text: 'These feedbacks are generated defaultly.',
            rating: 5,
        },
        ])
    const [feedbackEdited, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delelte?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
          }
    }
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        console.log('id', id, 'newItem', updatedItem)
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, ...updatedItem} : item))
        )
    }


    return(
    <FeedbackContext.Provider value={{feedback, feedbackEdited, deleteFeedback, addFeedback, editFeedback, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext