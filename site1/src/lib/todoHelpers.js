export const addTodo=(list,item)=> [...list,item]; //return new array

   // return list.push(item); ****** mutation


export const generateId=()=>Math.floor(Math.random()*100000);
export const findById=(id,list)=>list.find(item=>item.id==id);

export const updateById=(id,list,item)=>{
    const idx=list.findIndex(item=>item.id===id);
   console.log(idx);
    return [...list.slice(0,idx),
         item,
         ...list.slice(idx+1)
    
    ];

}