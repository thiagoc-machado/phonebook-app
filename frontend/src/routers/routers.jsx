import { useState } from 'react';
import '../App.css';
import { Routes, Route, Navigate, Router } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import ContactList from '../components/contacts/ContactList';
import AddContact from '../components/contacts/AddContact';
import ViewContact from '../components/contacts/ViewContact';
import EditContact from '../components/contacts/EditContact';
import Spinner from '../components/spinner';
import Home from '../pages/home';
import Login from '../components/login/login';
import Logon from '../components/login/logon';
import PrivateRoute from './privateRoute';

const Routers = () => {
  //const [count, setCount] = useState(0);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/logon'} element={<Logon />} />
        <Route element={<PrivateRoute/>}>
          <Route path={'/contacts/list'} element={<ContactList />} />
          <Route path={'/contacts/add'} element={<AddContact />} />
          <Route path={'/contacts/view/:contactId'} element={<ViewContact />} />
          <Route path={'/contacts/edit/:contactId'} element={<EditContact />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
