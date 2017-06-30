import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews.js'

const NYT_API_KEY = 'e2977384ac91471da8a247c47a5e097e'
const APIKEY = `api-key=${NYT_API_KEY}`
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + APIKEY + '&query='

class SearchableMovieReviews extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  fetch (query) {
    const SEARCH = URL + `${query}`
    fetch(SEARCH)
      .then(resp => resp.json())
      .then(json => this.setState({reviews: json.results}))
  }

  handleSubmit(e) {
    e.preventDefault()
    this.fetch (e.target.search.value)
    this.render()
  }


  render () {
    return (
      <div className="searchable-movie-reviews" >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" id="search" name="search"/>
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviews