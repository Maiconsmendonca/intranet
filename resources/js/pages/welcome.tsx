import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { User } from '../types';
import BannerRotativo from '@/components/banner-rotativo';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface Props {
  user: User | null;
  news?: NewsItem[]; // opcional porque definiremos valor padrão
}

const Welcome = ({ user, news = [] }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
  };

  return (
  <div className="min-h-screen bg-gray-100 text-gray-900 font-inter">
    {/* Top Navigation */}
    <nav className="bg-white shadow-custom px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Navbar />

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="text-right">
              <p className="font-semibold">Olá, {user.name}</p>
              <p className="text-sm text-gray-600">Administrador</p>
            </div>
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=005BAC&color=fff`}
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-[#005BAC]"
            />
          </>
        ) : (
          <Link href="/login" className="text-[#005BAC] font-semibold hover:text-[#003F7A] transition-colors">
            Entrar
          </Link>
        )}
      </div>
    </nav>

    {/* Conteúdo Principal */}
    <main className="p-6 lg:p-10">
      {/* Header com título e subtítulo */}
      <header className="mb-8">
        {/* Banner Rotativo */}
        <BannerRotativo />
      </header>

        {/* Widgets */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News Feed */}
          <div className="bg-white rounded-xl p-6 shadow-custom">
            <h2 className="text-xl font-semibold text-[#333333] mb-4">Últimas Notícias</h2>
            <div className="space-y-4">
              {news.length > 0 ? (
                news.map((item) => (
                  <div key={item.id} className="border-l-4 border-[#005BAC] pl-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.content}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Nenhuma notícia disponível.</p>
              )}
              <Link href="/news" className="text-[#005BAC] font-semibold hover:underline">
                Ver todas as notícias
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl p-6 shadow-custom">
            <h2 className="text-xl font-semibold text-[#333333] mb-4">Acesso Rápido</h2>
            <ul className="space-y-2">
              {[
                { label: 'Portal do RH', href: '/hr' },
                { label: 'Sistema de Chamados', href: '/tickets' },
                { label: 'Manual da Empresa', href: '/manual' },
                { label: 'Treinamentos', href: '/training' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-[#005BAC] hover:underline font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-xl p-6 shadow-custom">
            <h2 className="text-xl font-semibold text-[#333333] mb-4">Agenda</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">02/08 - Reunião de Projetos (10h)</p>
              <p className="text-sm text-gray-600">04/08 - Treinamento de Segurança (14h)</p>
              <Link href="/calendar" className="text-[#005BAC] font-semibold hover:underline">
                Ver agenda completa
              </Link>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="bg-white rounded-xl p-6 shadow-custom md:col-span-2">
            <h2 className="text-xl font-semibold text-[#333333] mb-4">Últimos Treinamentos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Segurança da informação</h3>
                <p className="text-sm text-gray-600">Segurança da informação corporativa.</p>
              </div>
              <div>
                <h3 className="font-medium">Potencializar Vendas</h3>
                <p className="text-sm text-gray-600">Como potencializar suas vendas.</p>
              </div>
            </div>
            <Link href="/projects" className="text-[#005BAC] font-semibold hover:underline mt-4 inline-block">
              Ver todos os Treinamentos
            </Link>
          </div>

          {/* Birthdays */}
          <div className="bg-white rounded-xl p-6 shadow-custom">
            <h2 className="text-xl font-semibold text-[#333333] mb-4">Aniversariantes</h2>
            <p className="text-sm text-gray-600">Maria Oliveira - 02/08</p>
            <p className="text-sm text-gray-600">Carlos Souza - 05/08</p>
          </div>
        </section>
      </main>
    {/* Footer aqui */}
    <Footer />
    </div>
  );
};

export default Welcome;
