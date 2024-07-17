import Navigation from "./navigation";

const RootLayouts = ({children} : {children : React.ReactNode}) => {
  return (
    <main className="w-full h-full relative top-0 z-10">
      <div className="container max-w-[768px] mx-auto space-y-12">
        <Navigation/>
        {children}
      </div>
    </main>
  );
};

export default RootLayouts;