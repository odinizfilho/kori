import { h } from 'preact';
import Navigation from './Navigation';

export default function App() {
  return (
    <div>
      <div class="columns is-centered is-vcentered is-mobile">
        <div class="column is-half">
          <div class="box">
            <img src="img/logo.svg" class="image is-64x64 mb-4" alt="Kori Icon" />
            <div class="content">
              <p>Kori é o seu mais novo framework PHP:</p>
              <ul>
                <li>
                  <p>
                    Um novo framework para quem deseja simplicidade. Desenvolvido com foco na eficiência e facilidade de uso, Kori oferece recursos poderosos e uma abordagem direta para o desenvolvimento de projetos web. Com suporte total ao Tailwind CSS e Preactjs, você terá todas as ferramentas necessárias para criar interfaces elegantes e responsivas.
                  </p>
                </li>
                <li>
                  <p>
                    Aproveite <code>Preactjs + Bulma CSS</code>
                  </p>
                </li>
                <li>
                  <p>PHP 8.2</p>
                </li>
              </ul>
            </div>
            <div class="content">
              <p>Tem dúvidas? Acesse nossa documentação:</p>
              <p>
                <a href="https://kirophp.com/docs" class="has-text-info">
                  Ler docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
