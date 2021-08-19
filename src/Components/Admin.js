import React from 'react'

export const Admin = () => {
    function leadlist(){
        var gettoken = localStorage.getItem('token')
        
        fetch("https://projects.parthvi.tech/api/v1/lead",{
            method : 'GET',
            headers : ({'Content-Type':'application/json',
                        'Authorization':'Token '+gettoken})
        }).then(response => response.json())
            .then(data => {console.log(data);
                if(data.status_code === 200)
            {
              
                document.getElementById("errordiv").innerHTML="data received";            
                
                
            }
        else
    {
        document.getElementById("errordiv").innerHTML="Error from server";
    }})
    }
    return (
        <div>
            <h1>lead List</h1>
            <table style={{border:"2px solid black"}} id="leadtable">
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Lead source</th>
                    <th>Lead stage</th>
                    <th>Phone No.</th>
                </tr>
                <tr>
                    <td id="id"></td>
                    <td id="fname"></td>
                    <td id="lname"></td>
                    <td id="lsource"></td>
                    <td id="lstage"></td>
                    <td id="ph"></td>
                </tr>
            </table>
            {/* {data.map()} */
            }
            {/* <div>{data}</div> */}
            <div id="errordiv"></div>
            {leadlist()}
        </div>
    )
}






