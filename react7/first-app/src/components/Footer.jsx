import React from "react";


function Footer(){
    const curretYear=new Date().getFullYear();
    return(
        <footer>
            <p>Copyrighter@ {curretYear}</p>
        </footer>
    );

    

}

export default Footer;