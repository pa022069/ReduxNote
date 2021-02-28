import { connect } from 'react-redux'

import { changeAge } from '../action'

import Profile from '../components/Profile'

const mapStateToProps = state => state.Profile

const mapDispatchToProps = dispatch => ({
    changeAge: num => dispatch(changeAge(num)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
