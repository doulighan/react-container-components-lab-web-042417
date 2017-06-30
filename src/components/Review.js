import React from 'react'


class Review extends React.Component {
  render() {
    return (
      <div className='review'>
        <h3>{this.props.display_title}</h3>
        <p>{this.props.headline}</p>
      </div>
    )
  }
}


export default Review