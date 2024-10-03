import React from "react";
import { Routes, Route } from "react-router-dom";
import {
ManagerCreate, ManagerEdit, ManagerView, 
Managers
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="Managers/view/:id" element={<ManagerView {...props} title={'View Manager'} />} />
                        <Route path="Managers/edit/:id" element={<ManagerEdit {...props} title={'Edit Manager'} />} />
                        <Route path="Managers/create" element={<ManagerCreate {...props} title={'Create Manager'} />} />
                                                <Route path="/" element={<Managers {...props} title={'Table Layout'} nolistbar={true} />} />

                <Route path="/productsqq" element={<Managers {...props} title={'Table Layout'} />} />
        </Routes>
    )

};

export default Component;