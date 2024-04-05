import React, { useState } from 'react'; const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false); return (
        <div className="sidebar">
            <h2><span> We are Playing {sidebarOpen} match!!</span></h2>
            <button type="button" onClick={() => setSidebarOpen("Friendly")}>Friendly</button> 
            <button type="button" onClick={() => setSidebarOpen("Competitive")}>Competitive</button> 
            <button type="button" onClick={() => setSidebarOpen("Ranked")}>Ranked</button>
            <button type="button" onClick={() => setSidebarOpen("Unranked")}>Unranked</button>
            </div>
    );
};
export default Sidebar;
