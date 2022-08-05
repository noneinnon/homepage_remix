import { useLocation } from "@remix-run/react"

const isActive = (currentPath, locationPath) => currentPath === locationPath;
const applyActiveLinkClass = (currentPath, locationPath) => isActive(currentPath, locationPath) ? 'font-bold' : undefined

export default function Nav() {
    const {pathname} = useLocation();
    return (
        <nav className="flex justify-end gap-2 px-5 py-2">
            <a className={applyActiveLinkClass('/', pathname)} href="/">home</a>
            <a className={applyActiveLinkClass('/blog', pathname)} href="/blog">blog</a>
            <a className={applyActiveLinkClass('/projects', pathname)} href="/projects">projects</a>
        </nav>
    )
}
