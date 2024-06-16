import React from 'react';
import Navmenu from '../Components/NavMenu/Navmenu';

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Navmenu/>
            <main>{children}</main>
        </div>
    );
};

export default PublicLayout;