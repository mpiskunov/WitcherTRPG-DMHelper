import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CreateCampaign from './CreateCampaign';
class Home extends React.Component {
    state = {
      posts: []
    }
  
    componentDidMount() {
      axios.get(`https://localhost:5001/api/Weapons`)
        .then(res => {
          const posts = res.data
          this.setState({ posts });
        });
    }
  
    render() {
      return (
        <div>
          <CreateCampaign></CreateCampaign>
          <ul>
            {this.state.posts.map(post =>
              <li key={post.id}>{post.name}</li>
            )}
          </ul>
        </div>
      );
    }
  }
export default Home;