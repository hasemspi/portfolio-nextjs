import Link from "next/link";
import ThemeSwitchProvider from './../../../app/themeswitch/themeswitch';

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Project", href: "/project" },
  { name: "Service", href: "/service" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

const HeaderNav = () => {
  return (
    <div className="navbar sticky top-0 z-50 lg:w-[1100px] mx-auto" style={{ backgroundColor: 'var(--navbar-background)' }}>
      <div className="navbar-start">
        {/* Drawer button for smaller screens */}
        <div className="lg:hidden">
          <label htmlFor="menu-drawer" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
        </div>
        
        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl">Hasem</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <ThemeSwitchProvider />
      </div>

      {/* Drawer content for mobile view */}
      <input type="checkbox" id="menu-drawer" className=" mt-20 drawer-toggle hidden" />
      <div className="drawer-side lg:hidden">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 text-base-content mt-14" style={{ backgroundColor: 'var(--navbar-background)' }}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;
