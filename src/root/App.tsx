import useGetValue from "../lib/hooks/useGetValue";

export default function App() {
  const users = useGetValue({ path: "users", initialLoad: false });

  const isLoading = users.isLoading;

  const dataUsers = Object.values(users.snapshot || {});

  console.log({ dataUsers });

  return (
    <main>
      <div className="container max-w-[768px] mx-auto">
        <div className="my-6">
          <h1 className="text-3xl font-bold">Welcome to Learn Firebase !</h1>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magni voluptas dolores totam nostrum consequuntur hic.</p>
        </div>
        <button onClick={users.handleGetValue} className="btnPrimary">
          {isLoading ? "Loading..." : "Get Data"}
        </button>

        <div className="mt-3">
          {dataUsers.map((user : any) => (
            <li key={user.email} className="list-disc">{user.username}</li>
          ))}
        </div>
      </div>
    </main>
  );
}
