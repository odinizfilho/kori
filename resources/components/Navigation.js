import { h, Component } from 'preact';

export default class Navigation extends Component {
    render() {
        return (
            <nav class="bg-blue-500 p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <a href="#" class="text-2xl font-semibold text-white">Logo</a>
                    <ul class="flex space-x-4">
                        <li><a href="#" class="text-white hover:text-blue-200">Home</a></li>
                        <li><a href="#" class="text-white hover:text-blue-200">Sobre</a></li>
                        <li><a href="#" class="text-white hover:text-blue-200">Serviços</a></li>
                        <li><a href="#" class="text-white hover:text-blue-200">Contato</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
