import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }
    return newPostListnewPostList
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = () => { }
    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: { postId }
        })
    }

    return <PostList.Provider value={{
        postList,
        addPost,
        deletePost
    }}>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi everyone',
    reactions: 2,
    userId: 'user-9',
    tags: ['Vacation', 'Enjoying']
},
{
    id: '2',
    title: 'Going to Nepal',
    body: 'Hi everyone',
    reactions: 4,
    userId: 'user-12',
    tags: ['Vacation', 'Enjoying']
},
]

export default PostListProvider