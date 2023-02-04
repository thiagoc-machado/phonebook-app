import React, { useContext } from 'react';
import { useNavigate, Route } from 'react-router-dom';
import { AuthContext } from '../services/UserService';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { data } = useContext(AuthContext);
    const navigate = useNavigate();
    
    return (
        <Route 
            {...rest}
            render={(props) => data.token ? (
                <Component {...props} />
            ) : (
                navigate('/login') || null
            )}
        />
    );
}