import NavBar from "../components/NavBar";
import Title from "../components/Title";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar />
      <div className="mx-auto max-w-5xl pt-[20vh] pb-4">
        <Title />
        {children}
      </div>
    </div>
  );
};

export default Layout;
