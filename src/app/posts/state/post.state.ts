import { Posts } from "src/app/models/post.model"

export  interface postState{
    posts:Posts[]
   

}





export const initialState:postState={
    posts:[
        {
            id:1, title:"dev1", description:"dev1 description"
        },
        {
            id:2, title:"dev2", description:"dev2 description"
        },
        {
            id:3, title:"dev3", description:"dev3 description"
        },
    ]
}