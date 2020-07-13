import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import AddStamp from './Components/AddStamp/AddStamp';
import AddBucketList from './Components/AddBucketList/AddBucketList';
import {Route, Switch, Link} from 'react-router-dom';
import StampList from './Components/StampList/StampList';
import BucketList from './Components/BucketList/BucketList';
import Stamp from './Components/Stamp/Stamp';
import Login from './Components/Login/Login';
import STAMP from './Dummy-Data/Dummy-Stamp';
import BUCKET from './Dummy-Data/Dummy-Bucketlist';
import FindPark from '../src/Components/FindPark/FindPark';
import TokenService from '../src/Services/TokenService';
import Header from './Components/Header/Header'
import PublicRoute from './Components/Routes/PublicRoute';
import PrivateRoute from './Components/Routes/PublicRoute';
import './App.css';

function App() {
  console.log(STAMP)
  console.log(BUCKET)
  const Stamp_Dummy = STAMP.STAMP
  const Bucket = BUCKET.BUCKET
  return (
    <>
    <header className="app-header">
    <section className="title-section">
      <h1>National Parks Discover-E-Pass</h1>
      <h3>A Paperless Passport to America's National Parks and Monuments</h3>
    </section><br/>
      <Header />
    </header>
    <body>
        <main>
          
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <PublicRoute path='/Signup' component={Signup} />
            <PublicRoute path='/Login' component={Login} />
            {/*idk why but the Private route makes a weird error I can't figure out*/}
            <PrivateRoute path='/Dashboard' component={(prop) => (
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
            <Route path='/testing' component={FindPark} />
          </Switch>
      </main>
    </body>
    <footer className="app-footer">
      <p>Created by Chris Aragon 2020</p>
    </footer>

    </>
  )
}

export default App;
