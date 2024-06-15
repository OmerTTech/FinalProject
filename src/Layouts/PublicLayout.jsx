import React from 'react';
import Header from '../Components/Header/Header';

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    );
};

export default PublicLayout;