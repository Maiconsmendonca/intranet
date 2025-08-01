import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-sm">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Permetal</h3>
          <p className="text-gray-600">Há 67 anos transformando ideias em soluções metálicas.</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Links Rápidos</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-[#F5A623]">Início</Link></li>
            <li><Link href="/portais" className="hover:text-[#F5A623]">Portais</Link></li>
            <li><Link href="/noticias" className="hover:text-[#F5A623]">Notícias</Link></li>
            <li><Link href="/agenda" className="hover:text-[#F5A623]">Agenda</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Contato</h3>
          <p className="text-gray-600">contato@permetal.com.br</p>
          <p className="text-gray-600">+55 (11) 1234-5678</p>
        </div>
      </div>

      <div className="bg-gray-100 text-center text-gray-500 text-xs py-4">
        © {new Date().getFullYear()} Permetal. Todos os direitos reservados.
      </div>
    </footer>
  );
}
