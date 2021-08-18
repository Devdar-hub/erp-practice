import React from 'react'
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
        }
    }
    
    componentDidMount(){
    
        fetch('https://projects.parthvi.tech/api/v1/contact/{id}/')
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    isLoaded: true,
                    item: json,
                })
            });
    }
    }
export const Admin = () => {
    var {isLoaded,item}  = this.state;
    if(!isLoaded){
        return<div>Loading...</div>
    }
    else{
        <div>Data has been loaded</div>
    }
    return (
        <div>
            
        </div>
    )
}






