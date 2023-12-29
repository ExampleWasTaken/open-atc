import { useRef, useState } from 'react';
import routes from '../../../routes.ts';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';

interface NavLink {
  id: number;
  name: string;
  link: string;
}

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = useRef<NavLink[]>([
    {
      id: 0,
      name: 'Home',
      link: routes.home,
    },
  ]);

  const handleNavigate = (navLink: NavLink) => {
    setIsMenuOpen(false);
    navigate(navLink.link);
  };

  return (
    <>
      <nav className="px-5 py-3 w-full flex justify-between items-center border-b-1">
        <div className="flex items-center space-x-2">
          <img
            className="w-16"
            src="/img/icon.png"
            alt="OpenATC logo"
          />
          <h1 className="font-normal">OpenATC</h1>
        </div>

        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IconContext.Provider value={{ size: '40' }}>
            {isMenuOpen ? <CgClose /> : <CgMenuRight />}
          </IconContext.Provider>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="px-5 py-10">
          {navLinks.current.map(current => {
            return (
              <li
                onClick={() => handleNavigate(current)}
                className="text-xl font-medium"
                key={current.id}
              >
                {current.name}
              </li>
            );
          })}
        </div>
      )}
    </>
  );
};
