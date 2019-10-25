import React, { useState } from 'react'
import { connect } from 'react-redux'
import { search } from '../actions'

function SearchForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.search(input)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          className="form-input"
          type="text"
          placeholder="search"
          value={input}
          onChange={handleChange}
        />
      </form>
      <button type="submit">Search</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    results: state.results,
    isLoading: state.isLoading,
    error: state.error
  }
}

const mapDispatchToProps = { search };

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);