// import React from 'react'

// export const List = (props) => {
//     const itemlist = props.items;
//     const category = props.category;

//     // fruits.sort((a,b) => a.name.localeCompare(b.name)) //sort by name alphabetically
//     // fruits.sort((a,b) => b.name.localeCompare(a.name)) //sort by name alphabetically
//     // fruits.sort((a, b) => a.calories - b.calories) //sort by calories numberically
//     // fruits.sort((a, b) => b.calories - a.calories) //sort by calories reverse numerically

//     // const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100)
//     // const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100)

//     const listitems= itemlist.map( item =>   <li key={item.id}>
//                                             {item.name}: &nbsp;
//                                             <b>{item.calories}</b></li>)

//     return (
//         <>
//             <h3 className='list-category'>{category}</h3>
//             <ol className='list-items'>{listitems}</ol>
//         </>
//     )
// }
// list.defaultProps ={
//     category:"Category",
//     items: []
// }
