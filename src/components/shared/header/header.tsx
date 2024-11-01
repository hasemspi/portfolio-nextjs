import Link from "next/link";
import ThemeSwitchProvider from './../../../app/themeswitch/themeswitch';
const menuItems = [
  { name: "Home", href: "/" },
  { name: "Project", href: "/project" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];
const HeaderNav = () => {
    return (
      <div className="navbar sticky top-0 z-50 lg:w-[1100px] mx-auto" style={{ backgroundColor: 'var(--navbar-background)' }}>
      <div className="navbar-start">
        {/* Dropdown menu for smaller screens */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {menuItems.map((item, index) => (
              <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
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
    </div>
    );
};

export default HeaderNav;