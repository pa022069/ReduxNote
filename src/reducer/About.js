const rootState = {
    address: "Taipei",
    phone: "0900000000"
}

const About = (state = rootState, action = {}) => {
    switch (action.type) {
        // case "ADD_AGE":
        //     console.log(action.num)
        //     return ({
        //         ...state,
        //         age: state.age + action.num
        //     })
        default:
            return state;
    }
}

export default About;