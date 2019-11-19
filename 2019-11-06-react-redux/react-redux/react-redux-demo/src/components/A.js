import React, { Component } from 'react'
import { connect } from 'react-redux'; // import redux

class A extends Component {
  render() {
    return (
      <div>
        A, x = {this.props.xx}
        <button onClick={this.props.incrementX}>Increment X</button>
      </div>
    )
  }
}

// redux specific constants
const mapStateToProps = (state) => ({
    x: state.x
});

const mapDispatchToProps = (dispatch) => ({
    incrementX: () => dispatch({ type: 'INCREMENT_X' })
});

// export is also slightly modified
export default connect(mapStateToProps, mapDispatchToProps)(A);