
import Table1 from './Table1';
import Table2 from './Table2';
import List from './List';
import List1 from  './List1'

function Show(){
    const data = [
        {
            name:"dinu",
            age:22,
            gender:"male",
            mark1:222,
            mark2:444
        },
        {
            name:"dev",
            age:22,
            gender:"male",
            mark1:222,
            mark2:444
        }, 
        {
            name:"vij",
            age:22,
            gender:"female",
            mark1:222,
            mark2:444
        }, 
        {
            name:"bob",
            age:22,
            gender:"male",
            mark1:222,
            mark2:444
        }, 
        {
            name:"dal",
            age:22,
            gender:"female",
            mark1:222,
            mark2:444
        }
    ];

    const types=[
        {
            item1:"HTML"
        },
        {
            item2:"CSS"
        },
        {
            item3:"JAVASCRIPT"
        },
        {
            item4:"REACTJS"
        },
    ]

    return (
      <div>
        <h1>Table Using Props</h1>

        <Table1 data1 = {data} />
        <Table2 data1 = {data} />

        {/* <List items = {types}/> */}
        <List1 items = {types}/>
      </div>
    )
  }

  export default Show;
