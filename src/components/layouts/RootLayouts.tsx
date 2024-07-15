const RootLayouts = ({children} : {children : React.ReactNode}) => {
  return (
    <main className="w-full h-full relative top-0 z-10">
      <div className="container max-w-[768px] mx-auto">
        <div className="my-6">
          <h1 className="text-3xl font-bold">Welcome to Learn Firebase !</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni voluptas dolores totam nostrum consequuntur hic.</p>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayouts;