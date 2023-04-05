import { useState } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

export const Navbar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll =()=>{
            if (window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <span className="navbar-toggler-icon"></span>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>   
                    </Nav>
                    <span className="navbar-text">
                        <div className="sociaal-icon">
                            <a href="#"><img src={} alt=""/></a>
                            <a href="#"><img src={} alt=""/></a>
                            <a href="#"><img src={} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Lets Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
