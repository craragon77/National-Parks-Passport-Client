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
  const Stamp_Dummy = STAMP.STAMP
  const Bucket = BUCKET.BUCKET
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/Signup' component={Signup} />
        <Route path='/Login' component={Login} />
        <Route path='/Dashboard' render={(prop) => (
          <Dashboard {...prop} name={'Chris'} Stamp_Dummy={Stamp_Dummy} Bucket_Dummy={Bucket}/>
        )} />
        <Route path='/StampList' render={(prop) => (
            <StampList {...prop} Stamp_Dummy={Stamp_Dummy} />
        )} />
        <Route path='/BucketList' render={(prop) => (
            <BucketList {...prop} Bucket={Bucket} />
        )} />
        <Route path='/AddStamp' component={AddStamp}/>
        <Route path='/AddBucketList' component={AddBucketList}/>
        <Route path='/Stamp/:id' render={(prop) => (
          <Stamp {...prop} Stamp_Dummy={Stamp_Dummy} />
        )} />
        
        
      </Switch>
    </>
  )
}

export default App;
