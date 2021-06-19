import React from 'react'
import CreateNewList from './CreateNewList'
import Lists from './List';


 function SideBar() {
    return (
        <>
        <div>
            <div className="column is-9">
                    <CreateNewList/>
                    <Lists />
            </div>
       
        </div>
        </>
    )
}

export default SideBar;