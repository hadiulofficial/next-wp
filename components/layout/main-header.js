import Link from "next/link";
import Header from "./header";


const MainHeader = (props) => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" href="/">Dev Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</a></li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">Sample Post</a></li>
                        <li className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Header title={props.title} subTitle={props.subTitle} postTitle={props.postTitle} />
        </>
    );
};
export default MainHeader;