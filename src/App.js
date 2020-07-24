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
import PrivateRoute from './Components/Routes/PrivateRoute';
import './App.scss';
import NoPageFound from './Components/NoPageFound/NoPageFound';
import Hamburger from './Components/Buttons/Hamburger';

function App() {
  console.log(STAMP)
  console.log(BUCKET)
  const Stamp_Dummy = STAMP.STAMP
  const Bucket = BUCKET.BUCKET
  return (
    <>
    <header className="app-header">
      <Hamburger />
      <Header />
    <section className="title-section">
      <h1>National Parks <br/> Discover-E-Pass</h1>
      <h3>A Paperless Passport to America's National Parks and Monuments</h3>
    </section>
    </header>
    <body>
        <main>
          
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <PublicRoute path='/Signup' component={Signup} />
            <PublicRoute path='/Login' component={Login} />
            <PrivateRoute path='/Dashboard' component={Dashboard} />
            <PrivateRoute path='/Stampbook' component={StampList}/>
            <PrivateRoute path='/BucketList' component={BucketList}/>
            <PrivateRoute path='/Stamp/:id' component={Stamp} />
            <PrivateRoute path='/FindAPark' component={FindPark} />
            <Route component={NoPageFound} />
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
