import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import AddStamp from './Components/AddStamp/AddStamp';
import AddBucketList from './Components/AddBucketList/AddBucketList';
import {Route, Switch} from 'react-router-dom';
import StampList from './Components/StampList/StampList';
import BucketList from './Components/BucketList/BucketList';
import Stamp from './Components/Stamp/Stamp';
import Login from './Components/Login/Login';
import STAMP from './Dummy-Data/Dummy-Stamp';
import BUCKET from './Dummy-Data/Dummy-Bucketlist';

function App() {
  console.log(STAMP)
  console.log(BUCKET)
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/Signup' component={Signup} />
        <Route path='/Dashboard' render={(prop) => (
          <Dashboard {...prop} name={'Chris'} Stamp={STAMP} BucketList={BUCKET}/>
        )} />
        <Route path='/AddStamp' component={AddStamp}/>
        <Route path='/AddBucketList' component={AddBucketList}/>
        <Route path='/StampList' render={(prop) => (
          <StampList {...prop} Stamp={STAMP} />
        )} />
        <Route path='/BucketList' render={(prop) => (
          <BucketList {...prop} Bucketlist={BUCKET} />
        )} />
        <Route path='/Stamp' component={Stamp} />
        <Route path='/Login' component={Login} />
      </Switch>
      
    </>
  )
}

export default App;
