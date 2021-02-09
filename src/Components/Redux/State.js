import {rerenderEntireTree} from './../../render';

let state = {
    profilePage:{
        posts: [
            { id: 1, message: 'Hi man! How are you doing?', like: 2 },
            { id: 2, message: 'I am realy sick and tired of this shit!', like: 15 }
        ],
    },
    dialoguesPage:{
        dialogues: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Andry' },
            { id: 3, name: 'John' },
            { id: 4, name: 'Alexey' },
            { id: 5, name: 'Victor' }
        ],
        messages: [
            { id: 1, message: 'Hi,man!' },
            { id: 2, message: 'How is it going' },
            { id: 3, message: 'What is up?' }
        ]
    }
    };

 export let addPost=(postMessage)=>{
    let newPost={
        id:3, message:postMessage, like:0
    } 
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
 }   

    

export default state 