import Person from "./Person";
import Button from "./Button";
import Header from "./Header";
import List from "./List";
function App(){
    const name = "Balaji";
    const age= 24
    const buttonTxt = "Click"
    const title="This the Header title"
    const list = ['list1','list2','list3']
    const clickFn = () =>{
        console.log('Button Click Function called');
    }
    return (   
    <>
    <Person name={name} age={age}/>
    <Button text={buttonTxt} onClick ={clickFn} />
    <Header title={title}/>
    <List items={list}/>
    </>
    )
}

export default App;