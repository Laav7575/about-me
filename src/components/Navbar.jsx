import { Link, useMatch, useResolvedPath } from "react-router";

export default function Navbar() {
    const path = window.location.pathname;
    return <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/travel">Travel</CustomLink>
            <CustomLink to="/music">Music</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}