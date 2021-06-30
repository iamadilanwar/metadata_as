import "./WebList.css";
import React, { useState, useEffect } from "react";

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

  // Const for the Major data 
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalItmes());
 //Const for Main data to be Extracted one is for the Title and the second is for the url without https or http just a simple sweet url with wwww
    const [title, getTitle]=useState()
    const [source, getSource]=useState()

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

          }else{
        setItems([ {title , source} , ...items ]);   // <= If url given then
          setInputData("");
        }
      };
//delete
const  deleteurl = (id) => {
    const updateditems = items.filter((ele) =>{
        return id !== ele.i;
    }); 
    setItems(updateditems);
}

      
// local storage data fetching
      useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items));
      }, [items]);
      const live = items.length;


  return (

  <div className="main-div">
  <div className="header">
      <a href="#default" className="logo"> LIVE WEBSITE TRACKING </a>
      <div className="header-right">  Currently tracking {live} websites</div>
    </div>
      
      <div className="body-container">
            <div className="input-container">
                  <input
                    type="text"
                    placeholder="    Input with URL Validation"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                  />

                  <button  title="Add Item" onClick={addItem}>ADD WEBSITE</button>
                  
                </div>

                <div className="body-title">WEBSITES</div>
                <div className="itemlist" >
                
                  {
                    items.map((ele,ind)=>{
                      return(
                        <div className="itemlist_" >
                          <div id="itemlist_inner" key={ind}>
                          <span id="title"> {ele.title}</span><br/>
                          <span id="source"><a href="#">{ele.source} </a></span>
                          <button  onClick={() => deleteurl(ele.ind)} >delete</button>
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
