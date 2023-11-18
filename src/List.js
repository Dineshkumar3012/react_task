import { Component } from "react";



function List(Props){
    const {items} = Props
    const list1 =  items.map((e)=>{
        return(
             <li>
                {e.item1}
                {e.item2}
                {e.item3}
                {e.item4}
            </li>
            
        )
    })
    return (
        <div className="rrr">
            <h1>List Using Props</h1>
            <ul>
                {list1}
            </ul>
        </div>
    )
}




export default List;