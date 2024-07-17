import RootLayouts from "../../components/layouts/RootLayouts";
import useGetValue from "../../lib/hooks/useGetValue";

export default function getValuePage() {
  const users = useGetValue({ path: "users", initialLoad: false });
  console.log(users);

  const isLoading = users.isLoading;
  const dataUsers = Object.values(users.snapshot || {});

  console.log({ dataUsers });

  return (
    <RootLayouts>
      <div>
        <div className="mb-6">
          <h1 className="text-2xl">Get Data From Realtime Database With Hooks.</h1>
          <span className="cursor-pointer text-blue-500 underline underline-offset-4" onClick={users.handleGetValue}>
            {isLoading ? "Loading..." : "Get Data"}
          </span>
        </div>

        <div className="flex gap-3 mb-3">
          <h3>Data Users :</h3>
          <div className="bg-gray-300 w-6 h-6 rounded-full text-center">
            {dataUsers.length}
          </div>
        </div>
        <pre>{JSON.stringify(dataUsers, null, 2)}</pre>
      </div>
    </RootLayouts>
  );
}
