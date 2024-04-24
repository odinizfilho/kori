import { Link } from 'preact-router';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Página Inicial</Link></li>
                <li><Link href="/info">Nova Página</Link></li>
            </ul>
        </nav>
    );
}
