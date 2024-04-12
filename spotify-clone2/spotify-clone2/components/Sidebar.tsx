interface SidebarProps{
    children :React.ReactNode;
}

const Sidebar:React.FC<sidebarProps> = ({
    children
}) =>{
 return(
    <div>
        {children}
    </div>
 );
}

export default Sidebar;
