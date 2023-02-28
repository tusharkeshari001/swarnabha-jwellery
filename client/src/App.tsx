import React from 'react';
import './App.css';

function App() {
  const [message, setMessage] = React.useState('');
  React.useEffect(() => {
    fetch('http://localhost:3005/signup').then((response:any)=>{
      return response.json();
    }).then((data:any)=>{
      // console.log(data);
      setMessage(data.message);
    }).catch((error:any)=>{
      console.log('getting error while fetching data',error);
    })
    return () => {
    }
  }, [])
  
  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;
