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
    <div className={props.isVideo ? "display-none" : "form-container"}>
      <form onSubmit={handleSubmit}>
        <input 
          className="form-input"
          type="text"
          placeholder="search"
          value={input}
          onChange={handleChange}
        />
      </form>
      <button className="form-button" type="submit">Search</button>
      <div>
        <h1>Welcome to the Youtube Search App</h1>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isVideo: state.isVideo
  }
}

const mapDispatchToProps = { search };

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);