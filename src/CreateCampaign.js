import React from 'react';
import axios from 'axios';
class CreateCampaign extends React.Component {
    state = {
      //posts: []
    }
    async ButtonClick(){
        var data = {
            "name": document.getElementById("tbCampaign").value
        };
        // //alert("button click");
        // axios({
        //     method: 'post',
        //     url: 'https://localhost:5001/api/Campaigns',
            
        //     contentType: 'application/json' ,
        //     data: data,
        //     //dataType: "json",
        // })
        // .then(function (response) {
        //     //handle success
        //     console.log(response);
        // })
        // .catch(function (response) {
        //     //handle error
        //     console.log(response);
        // });

        let response = await fetch('https://localhost:5001/api/Campaigns', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
        });

        let result = await response.json();
    }
    componentDidMount() {
    //   axios.get(`https://localhost:5001/api/Armors`)
    //     .then(res => {
    //       const posts = res.data
    //       this.setState({ posts });
    //     });
    }
  
    render() {
      return (
          <div>
              
            <input type="text" id="tbCampaign"></input>
            <button onClick={this.ButtonClick}>Click Me</button>
          </div>
      );
    }
  }
export default CreateCampaign;