import React from 'react'
import { connect } from 'react-redux'

function VideoPage(props) {
  
  return (
    <div>
      {props.results && props.results[0].snippet.title}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    results: state.results
  }
}

const mapDispatchToProps = {
  // i will create another case to handle a filter and return the correct vid for this page
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage)