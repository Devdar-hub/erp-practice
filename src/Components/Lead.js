import React from 'react';

const Lead = () => {
    function createlead(e) {
        e.preventDefault();
        var gettoken = localStorage.getItem('token');
        var lstage = document.getElementById("lstage").value;
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var phoneno = document.getElementById("phoneno").value;
        var email = document.getElementById("email").value;
        var lsource = document.getElementById("lsource").value;
        var company = document.getElementById("company").value;
        var country = document.getElementById("country").value;
        var status = document.getElementById("status").value;
        // var deletedat = document.getElementById("deletedat").value;

        fetch("https://projects.parthvi.tech/api/v1/lead/", {
            method: 'POST',
            headers: ({ 'Content-Type': 'application/json', 
                 'Authorization': 'Token '+gettoken }),
            body: JSON.stringify({
                lead_stage: lstage,
                first_name: fname,
                last_name: lname,
                phone: phoneno,
                email: email,
                lead_source: lsource,
                company: company,
                country: country,
                status: status,
                // deleted_at : deletedat

            })
        }).then(response => response.json())
            .then(data => {console.log(data);
            if (data.status_code ===200){
                alert("Lead added Succefully");
            }
        else{
            alert(data.email[0]);
        }})
    }
    return (
        <div>
            <h1>Create Lead</h1>
            <form action="post" onSubmit={createlead}>
                Lead stage : <select id="lstage" name="lstage">
                    <option value="interested" defaultValue>Interested</option>
                    <option value="not_interested">Not interested</option>
                    <option value="contact_in_future" >Contact in future</option>
                    <option value="irreleventre">Irreleventre</option>
                    <option value="non_responsive">Non responsive</option>
                    <option value="dnd">DND</option>
                </select><br /><br />
                First name : <input type="text" name="" id="fname" required/><br /><br />
                Last name : <input type="text" name="" id="lname" required/><br /><br />
                Phone no. : <input type="number" name="" id="phoneno" required/><br /><br />
                Email : <input type="email" name="" id="email" required/><br /><br />
                Lead source : <select name="lsource" id="lsource">
                    <option value="fbads" defaultValue>FB Ads</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="cold_call">Cold Call</option>
                    <option value="website">Website</option>
                    <option value="adwords">AdWords</option>
                    <option value="chat">Chat</option>
                </select><br /><br />
                Company : <input type="text" name="" id="company" required/><br /><br />
                Country : <input type="text" name="" id="country" required/><br /><br />
                Status : <select name="status" id="status">
                    <option value="1" defaultValue>o</option>
                    <option value="0">1</option>
                </select><br /><br />
                {/* Deleted At : <input type="date" id="deletedat" /><br /><br /> */}
                <button>Create</button>


            </form>
        </div>
    )
}

export default Lead
