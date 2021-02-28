import { connect } from 'react-redux'

// import { changeAge } from '../action/index'

import About from '../components/About'

const mapStateToProps = state => state.About

// const mapDispatchToProps = dispatch => ({
//     changeAge: num => dispatch(changeAge(num)),
// })

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(About)
