import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar() {
  const [isPortaisOpen, setIsPortaisOpen] = useState(false);
  const portaisRef = useRef<HTMLDivElement>(null);

  // Fecha o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (portaisRef.current && !portaisRef.current.contains(event.target as Node)) {
        setIsPortaisOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Alterna o menu ao clicar no botão
  const togglePortais = () => {
    setIsPortaisOpen(prev => !prev);
  };

  // Fecha o menu ao clicar em um item
  const handleItemClick = () => {
    setIsPortaisOpen(false);
  };

  return (
    <nav className="bg-white shadow-custom px-6 py-2 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-[#333333]">Permetal Intranet</h1>
        <div className="ml-8 flex gap-6 items-center text-sm font-medium text-gray-700">

          <Link href="/welcome" className="hover:text-[#005BAC]">Início</Link>

          <div className="relative" ref={portaisRef}>
            <button
              onClick={togglePortais}
              className="hover:text-[#005BAC]"
            >
              Portais ▾
            </button>
            {isPortaisOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-lg p-2 w-52 z-40">
                {[
                  { label: 'RH', href: '/portal/rh' },
                  { label: 'TI', href: '/portal/ti' },
                  { label: 'Qualidade', href: '/portal/qualidade' },
                  { label: 'CIPA', href: '/portal/cipa' },
                  { label: 'Treinamentos', href: '/portal/treinamentos' },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block px-4 py-2 hover:bg-[#F0F4F8] rounded text-sm"
                    onClick={handleItemClick}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/news" className="hover:text-[#005BAC]">Notícias</Link>
          <Link href="/calendar" className="hover:text-[#005BAC]">Agenda</Link>
          <Link href="/menu" className="hover:text-[#005BAC]">Cardápio</Link>
          <Link href="/wiki" className="hover:text-[#005BAC]">Wiki</Link>
        </div>
      </div>
    </nav>
  );
}
