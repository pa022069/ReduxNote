const rootState = {
    name: "John",
    age: 18
}

const Profile = (state = rootState, action = {}) => {
    switch (action.type) {
        case "ADD_AGE":
            console.log(action.num)
            return ({
                ...state,
                age: state.age + action.num
            })
        default:
            return state;
    }
}

export default Profile;