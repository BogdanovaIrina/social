import {addPostAC, profileReducer} from "./profile-reducer";

let state:any = {
    posts : [
        {id: 1, post: 'Hi, how are you', likesCount: 3},
        {id: 2, post: "I'm fine and you" , likesCount: 5}
    ]}

test('new post should be added', () => {

    let newState = profileReducer(state, addPostAC('Some new post'))

    expect(newState.posts.length).toBe(3)
})
test('message of new post should be correct', () => {

    let newState = profileReducer(state, addPostAC('Some new post'))

    expect(newState.posts[2].post).toBe('Some new post')
})













// just a plug
export default () => {}