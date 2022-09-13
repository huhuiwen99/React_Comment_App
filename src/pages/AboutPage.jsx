import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about"></div>
        <h3>This is the React App to leave feedback for products or a service.</h3>
        <p>Version: 1.0.0</p>
        <Link to='/'>
           Back to HomePage.
        </Link>
    </Card>
  )
}

export default AboutPage
