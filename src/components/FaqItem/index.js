// Write your code here.
import {Component} from 'react'

import './index.css'
class FaqItem extends Component {
  state = {isclicked: false}

  click = () => {
    this.setState(prevState => ({isclicked: !prevState.isclicked}))
  }
  render() {
    const {details} = this.props
    const {id, questionText, answerText} = details
    const {isclicked} = this.state
    const url = isclicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const alt = isclicked ? 'minus' : 'plus'
    return (
      <li className="li">
        <div className="end">
          <h1 className="question">{questionText}</h1>
          <button onClick={this.click} className="btn">
            <img src={url} alt={alt} className="img" />
          </button>
        </div>
        {isclicked && (
          <div className="middle">
            <hr className="hr" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
