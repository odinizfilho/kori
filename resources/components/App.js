import { h } from 'preact';
import Navigation from './Navigation';

export default function App() {
  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
               <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <img src="img/logo.svg" class="h-8" alt="Kori Icon" />
            <div class="divide-y divide-gray-300/50">
              <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>Kori é o seu mais novo framework PHP:</p>
                <ul class="space-y-4">
                  <li class="flex items-center">
                    <p class="ml-4">
                      Um novo framework para quem deseja simplicidade. Desenvolvido com foco na eficiência e facilidade de uso, Kori oferece recursos poderosos e uma abordagem direta para o desenvolvimento de projetos web. Com suporte total ao Tailwind CSS e Preactjs, você terá todas as ferramentas necessárias para criar interfaces elegantes e responsivas. 
                    </p>
                  </li>
                  <li class="flex items-center">
                    <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p class="ml-4">
                      Aproveite <code class="text-sm font-bold text-gray-900">Preactjs + Tailwind CSS</code>
                    </p>
                  </li>
                  <li class="flex items-center">
                    <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p class="ml-4">PHP 8.2</p>
                  </li>
                </ul>
              </div>
              <div class="pt-8 text-base font-semibold leading-7">
                <p class="text-gray-900">Tem dúvidas? Acesse nossa documentação:</p>
                <p>
                  <a href="https://kirophp.com/docs" class="text-sky-500 hover:text-sky-600">
                    Ler docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
