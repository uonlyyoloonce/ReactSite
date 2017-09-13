export const addTodo=(list,item)=>{

   // return list.push(item); ****** mutation
return [...list,item]; //return new array

}
export const generateId=()=>Math.floor(Math.random()*100000);