import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4} from 'uuid'
 

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
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

    return (
    <>
        <Header />
        <div className='container'>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
    </>
    )
    // return React.createElement(
    // 'div', 
    // {className: 'container'},
    // React.createElement('h1', {}, 'My new app!')
    // )
}

export default App