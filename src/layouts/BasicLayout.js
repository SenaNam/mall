import BasicMenu from "../components/menu/BasicMenu";

const BasicLayout = ({ children }) => {
  return (
    <>
    <BasicMenu/>


      <div className="bg-white w-full flex flex-col sapce-y-0 md:flex-row md:space-x-0 md:space-y-0">
        <main className="bg-sky-300 md:w-2/3 lg:w-3/4 p-5">
          {children}
        </main>

        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 p-5">
          <h1 className="text-2xl md:text-4xl">SideBar</h1>
        </aside>
      </div>
    </>
  );
};

export default BasicLayout;
