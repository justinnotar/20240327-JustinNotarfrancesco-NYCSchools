import logo from "../assets/logo.png";
import content from "../assets/content.json";

const NavBar = () => {
  return (
    <div className="absolute flex top-0 left-0 w-full bg-slate-900 text-white text-4xl">
      {/* click nav bar title to take user back to homepage */}
      <a className="flex p-3" href="/">
        <img className="h-11 pr-3" src={logo} alt={content.logoAltText} />
        {content.nyc} {content.navbar}
      </a>
    </div>
  );
};

export default NavBar;
