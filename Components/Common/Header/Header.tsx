import { NextPage } from 'next';
import Link from 'next/link';
const Header: NextPage = () => {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ['Home', '/'],
        ['Products', '/Products'],
        ['About', '/About'],
      ].map(([title, url], index) => (
        <Link
          href={url}
          key={index}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
