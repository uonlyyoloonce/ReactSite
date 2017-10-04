import {addTodo,findById,updateById,removeTodo} from './todoHelpers'
// test('addTodo should add the passed todo to the list', () => {
//   const startTodos = [
//     {id:1, name: 'one', isComplete: false},
//     {id:2, name: 'two', isComplete: false}
//   ]
//   const newTodo = {id:3, name: 'three', isComplete: false}
//   const expected = [
//     {id:1, name: 'one', isComplete: false},
//     {id:2, name: 'two', isComplete: false},
//     {id:3, name: 'three', isComplete: false}
//   ]

//   const result = addTodo(startTodos, newTodo)

//   expect(result).toEqual(expected)
// })


test.skip('addTodo should not mutate the existing todo array', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false}
  ]
  const newTodo = {id:3, name: 'three', isComplete: false}
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)

})

test.skip('findById should return expected item from an array', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
   {id:3, name: 'three', isComplete: false}

  ]
 
  const expected={id:2, name: 'two', isComplete: false};
  const result = findById(2, startTodos)

  expect(result).toEqual(expected);

})

test.skip('updateById should update expected item from an array', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
   {id:3, name: 'three', isComplete: false}
  ]
 
  const inputTodo= {id:2, name: 'two', isComplete: true}
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
   {id:3, name: 'three', isComplete: false}
  ]
  const result = updateById(2,startTodos, inputTodo);

  expect(result).toEqual(expected);
  expect(result).not.toBe(expected);
})

test('updateById should delete expected item from an array', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
   {id:3, name: 'three', isComplete: false}
  ]
 
  //const inputTodo= {id:2, name: 'two', isComplete: true}
  const expected = [
    {id:1, name: 'one', isComplete: false},
    
   {id:3, name: 'three', isComplete: false}
  ]
  const result = removeTodo(startTodos,2);

  expect(result).toEqual(expected);
  expect(result).not.toBe(expected);
})