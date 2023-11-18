import { Component } from "react";


class List1 extends Component{
    render(){
        const {items} = this.props
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
                <h1>List Using class</h1>
                <ul>
                   {list1}
                </ul>
            </div>

)}

    }


export default List1;





