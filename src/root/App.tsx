import RootLayouts from "../components/layouts/RootLayouts";
import useGetValue from "../lib/hooks/useGetValue";

export default function App() {
  const users = useGetValue({ path: "users", initialLoad: false });

  const isLoading = users.isLoading;
  const dataUsers = Object.values(users.snapshot || {});

  console.log({ dataUsers });

  return (
    <RootLayouts>
      <div>
        <h1>Get Data From Realtime Database With Hooks.{' '}
          <span onClick={() => users.handleGetValue()} className="cursor-pointer text-blue-500 underline font-medium">{isLoading ? "Loading..." : "Get Data"}</span>
        </h1>

        <div className="mt-3">
          {dataUsers.map((user: any) => (
            <li key={user.email} className="list-disc">
              {user.username}
            </li>
          ))}
        </div>
      </div>
    </RootLayouts>
  );
}
