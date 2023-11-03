// Importe a função render do Preact
// Importe a função render do Preact
import { h, render } from 'preact';


// Importe o componente principal do seu aplicativo
import App from '../components/App';


// Renderize o componente no elemento com o ID 'app'
render(<App autoreload={false} />, document.getElementById('app'));

