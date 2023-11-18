import { Component } from "react";

class Table2 extends Component{
    constructor(){
        super()
        this.state = {

            make: "Yamaha",
      
            model: "R15",
      
            color: "blue",

            count : 0
      
          };
       
    }

        
    click2(){
        this.setState({
            color:"red"
        })
    }
    
    click(){
    this.setState({
        color:"red",
        count:this.state.count+1
    })
}
    click1(){
    this.setState({
        count:this.state.count-1
    })
}

    render(){
    const {data1}= this.props
   const data2= data1.map((e)=>{
        return(
            <tr>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>{e.mark1}</td>
                <td>{e.mark2}</td>
            </tr>
        )
    })

     
    return (
        <div>
            <h1>Table Using Class</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>AGE</th>
                    <th>Gender</th>
                    <th>10th Mark</th>
                    <th>12th Mark</th>
                </tr>
                {data2}
                </table>
            <h1>{this.state.make}</h1>
            <h1>{this.state.model}</h1>
            <h1>{this.state.color}</h1>
            <button onClick={()=>this.click2()}>change color</button>
            <h1></h1>
            <button onClick={()=>this.click1()}>-</button>
            <h1 className="www">{this.state.count}</h1>
            <button onClick={()=>this.click()}>+</button>
        </div>
        
    )}
}




export default Table2;
