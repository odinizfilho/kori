import { h } from 'preact';
import { Router } from 'preact-router';
import App from './App';
import Info from './Info';

export default function Routes() {
    return (
        <Router>
            <App path="/" />
            <Info path="/info" />
        </Router>
    );
}
