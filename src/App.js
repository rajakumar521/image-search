
import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const[photo ,setPhoto]=useState(" ");
  const [result ,setresult]= useState([]);

  const changephoto =()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=Hwrqn561rMHu1AASBcZ8PAHuRX1FXH1lAHtUfz3Bm28`)
    .then((response)=>{
      setresult(response.data.results);
    })
  }
  return (
    <div>
      <div className = "heading">
        <h1>SnapShot</h1>
      </div>
      <div>
        <input type="text" className='form-control' placeholder='Search the images here' value={photo} onChange={(e)=>{
            setPhoto(e.target.value)
        }}/>
        <button type='submit' onClick={changephoto} className='button'>Search</button>
      </div>

        <div className='container'>
          <div>
            {result.map((value)=>{
              return(
                <div className='container'>
                      <img  alt="#" src={value.urls.small}/>
                   

                </div>  
              )
            })}
          </div>

        </div>

    </div>
  );
}

export default App;
