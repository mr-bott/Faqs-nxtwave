// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="main">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="ul">
            {faqsList.map(each => (
              <FaqItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
