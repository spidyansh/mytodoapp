import { useState } from 'react';
import './App.css';

function App() {

  const [inputList, setinputList] = useState("")
  const [item, setitem] = useState([])

  
  const itemEvent = (event) => {
    setinputList(event.target.value)
  }

  const listOfItems = () => {
    setitem((oldItem) => {
      return [...oldItem, inputList];
    });
    setinputList("");
  };

  const deleteItem=()=>{
    console.log("deleted")
    setinputList("")
  }
  return (
    <>
      <div className='main_div'>
        <div className="center_div">
          <br />
          <h1>ToDo App</h1>
          <br />
          <input type="text" placeholder='Add an item' onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}

            {item.map((itemval, index) => {
              return (
                <>
                <div>
                <button onClick={deleteItem}>-</button>
                <li>{itemval}</li>
                </div>
                </>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
