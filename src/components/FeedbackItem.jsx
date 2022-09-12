import PropTypes from "prop-types"
import Card from "../shared/Card"
import React from "react"

function FeedbackItem({item}) {
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>Click</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem