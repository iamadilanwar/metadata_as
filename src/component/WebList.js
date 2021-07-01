import "./WebList.css";
import React, { useState, useEffect } from "react";
import validator from "validator";

// This cide section is to get the data from LocalStorage.

const getLocalItmes = () => {
    let list = localStorage.getItem("lists");
    console.log(list);
  
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  // Main Function

function WebList() {

  // Const for URL Validation 
    const [error, setError] = useState('')
  // Const for the Major data 
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalItmes());
 //Const for Main data to be Extracted one is for the Title and the second is for the url without https or http just a simple sweet url with wwww
    const [title, getTitle]=useState()
    const [source, getSource]=useState()

    
 // First Input data url checking    
    const validate = (e) => {
      if (validator.isURL(e)) {
        setError('');
        setInputData(e)
      } else {
        setError('Error Not Valid URL')
      }
    }
  

  // functions for the pakage which extracts the metadata from the url
    const urlMetadata = require('url-metadata')
    urlMetadata(inputData).then(
      function (metadata) {         // <= If loaded successfully
        getTitle(metadata.title)
        getSource(metadata.source)
      },
      function (error) {            // If failed to load
        console.warn(error)
      })

      const addItem = () => {        
          if(!inputData){       // <= if url area is blank
              alert('Please Input a Valid ')
          }else{
        setItems([ {title , source} , ...items ]);   // <= If url given then
          setInputData("");
        }
      };
//delete
const  deleteurl = (id) => {
    console.log(id);
    const updatedURLlist = items.filter((item,i)=>{
return i !== id;
    });

    setItems(updatedURLlist);
}
      const [live,setlive]=useState();

      const [liveBtn, setliveButton]=useState();

        const liveButton = {
        backgroundColor: '#058423',
        padding: '5px 25px',
        marginRight: '10px',
        color: 'aliceblue',
        borderRadius: '5px',}

       const notliveButton = {
        backgroundColor: '#FC5200',
        padding: '5px 25px',
        color: 'aliceblue',
        borderRadius: '5px',}
      
//local storage data fetching
      useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items));
      }, [items]);
      const liveWebsites = items.length;

      useEffect(()=>{
        fetch(inputData).then((response) => {
          console.log(response)
          if (response.status === 200 && response.ok === true){
            setlive('LIVE');
            setliveButton(liveButton)
  
          } else{
            setlive('ERROR');
            setliveButton(notliveButton);
  
          }
      })},[]);


  return (

  <div className="main-div">
  <div className="header">
      <a href="#default" className="logo"> LIVE WEBSITE TRACKING </a>
      <div className="header-right">  Currently tracking {liveWebsites} websites</div>
    </div>
      
      <div className="body-container">
            <div className="input-container">
                  <input
                    type="text"
                    placeholder="    Input with URL Validation"
                    value={inputData}
                    onChange={(e) => validate(e.target.value)}
                  />

                  <button  title="Add Item" onClick={addItem}>ADD WEBSITE</button><br/>
                  <span style={{ fontWeight: 'bold', color: 'red', }}>{error}</span>
                </div>


                <div className="body-title">WEBSITES</div>
                <div className="itemlist" >
                
                  {
                    items.map((item,i)=>{
                      return(
                        <div className="itemlist_" key={i} >
                          <div id="itemlist_inner">
                          
                          <button style={{ backgroundColor: '#FF2F2F', border:' none' , float :'right', padding: '5px 12px', color: 'aliceblue',borderRadius: '50%',}} onClick={() => deleteurl(i)} > X </button>

                          <p style={{ color: '#B4B4B4', padding: '5px', marginRight:'10px', borderRadius: '5px',float: 'right'}}> Status <span style={liveBtn}>{live}</span> </p>
                        
                          <span id="title"> {item.title}</span><br/>
                          <span id="source"><a href="#">{item.source} </a></span><br/>
                          
                          </div>
                          </div>
                      )
                    })
                }
                
            </div>

              <div className="footer">
                  <p>
                  This application is a test. It lets users add a list of URLs in local storage. Along with the URL it stores the Title of the page returned when fetching the contents of the URL. The Application then fetches the contents of each URL and checks the response type. If the response is 200 OK, it marks the URL as LIVE. If the response when getting the contents of the website throws an error, the application highlights the errored website in the list. The application does this every 5 minutes or ON DEMAND when the URL is clicked by the user. On reload, the website checks the local storage for the list of websites added and loads all of them again
                  </p>
              <div className="footerTag"> Built for Cobold Digital by Adil Anwar </div><br/>
      </div>

      </div>
</div>    
  );
};

export default WebList;