import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'



export default function Profile() {
    const url = 'https://swapi.dev/api/people/' /*thi is the url that was given */
    const [profile, setProfile] = useState (null) /* i have to import the use state function to monitor my previous state
                                                    and to update any current state i am working with */
   
    useEffect(()=>{  /* the use effect takes two argument, a function and any other argument that its to monitor if there is changes
                            and in this component i am monitoring the url. this means the function will check if the url change*/
        axios.get(url)/*axios is use to fetch data from an api */
        .then((resp)=>{ 
              let users = resp.data.results
                setProfile(users)/*i output the data i got from the api here */
    }, [url] )

          
    })
    if (profile) { /*this "if" statement i checking for the current state of the profile variable that i declare in the useState */
      const ProfileDetails=  profile.map((User)=> { /*instead of coping each data one after the other, i used the map method to loop through the array */
         let names = User.name;
         let gender = User.gender;
         let height = User.height;
            return (

         <div className="container" > 
             <div id="container1">
            <img src="https://source.unsplash.com/200x200?sig=1https://generated.photos/face-generator" alt="this is an img" />
             <div className="textP">
             <h4><b>Name:</b> {names}</h4>
             <p><b>Gender:</b> {gender}</p>
             <p><b>Height:</b> {height}</p> 
             </div>
             </div>
            
         </div>
     )   
           
        })
        return ( /*this is the main content that appear on the site and its gotten from the loop */
            <div className="container">
                 {ProfileDetails}
            </div>
        )

    
    }

    return (/* whatever that is put here appear during the time of loading and i use css to style mine */
        <div> 
         
           <div className="body">

               <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
           </div>
           
        </div>
    )
}

 
