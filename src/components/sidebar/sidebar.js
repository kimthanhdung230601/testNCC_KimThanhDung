import "./sidebar.css"
function Sidebar() {
    return(
        <div className="Sidebar-block">
            <div className="Sidebar-container">
                <ul className="Sidebar-items">
                    <li className="Sidebar-item">Home</li>
                    <li className="Sidebar-item">Services</li>
                    <li className="Sidebar-item">News</li>
                    <li className="Sidebar-item">Blog</li>
                    <li className="Sidebar-item">Contact</li>
                </ul>
                
            </div>
        </div>
    )
}
export default Sidebar;