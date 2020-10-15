import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import SideDrawer from './UserCard/profileDetails/profileDetails'
import UserCardList from './UserCard/userCard'
import history from './Router/History'
import SlidingTabsDemo from './profileTab/profiletab'
import UserDetails from './UserCard/profileDetails/profileDetails'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayProfile : false ,
      selectedUser : {}
    }
  }
  handleClick = (item) => {
    this.setState({displayProfile : true , selectedUser : item})
    history.push("/profile");
    console.log("url here", item)
  }
  render(){
  return (
    <div className="App">
        {this.state.displayProfile ? <UserDetails selectedUser = {this.state.selectedUser} /> :    <UserCardList handleUserName={this.handleClick}/>}
      
    </div>
  );
}
}

export default App;
