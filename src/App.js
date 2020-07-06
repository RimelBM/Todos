import React from 'react';
import List from './Compoents/List' ;
function App() {
  
 
  

  
  return(


    <div 
    style={{textAlign:'center',
     fontFamily:'arial' ,
      backgroundColor:'pink' 
      ,marginTop:'30px' ,paddingTop:'5px',paddingBottom:'30px',
      marginLeft:'200px',marginRight:'200px',
      borderRadius:'19px'
      }}>

        <h1 style={{color:"white" ,fontSize:'100px'}}>Tasks</h1>

            <List/>


          </div>
                
  );
}
export default App;
