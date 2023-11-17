const Table1=(props)=>{
    const {data1}=props
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
    });
    
    

    return (
        <div>
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
        </div>
        
    )
}

export default Table1;
