import React from 'react'
import Review from './Review'

class MovieReviews extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="review-list">
        {this.props.reviews.map(r => 
          <Review 
            display_title={r.display_title}
            headline={r.headline}
          />
        )}
      </div>
    )
  }
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews