import { useRef } from "react";
import RootLayouts from "../../components/layouts/RootLayouts";
import useCreateValue from "../../lib/hooks/useCreateValue";

export default function CreatePage() {
  const create = useCreateValue();
  console.log(create);

  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  // This function is responsible for creating a new user in the database.
  const createUser = async (e: any) => {
    e.preventDefault();

    const username = usernameRef.current ? usernameRef.current.value : "";
    const email = emailRef.current ? emailRef.current.value : "";

    const path = "users";
    const value = { username, email, type: "push" };

    // Call the pushValue function from the create hook to push the user data to the specified path in the database.
    await create.pushValue(value, path);

    // Reset the form fields.
    usernameRef.current!.value = "";
    emailRef.current!.value = "";
  };

  return (
    <RootLayouts>
      <div>
        <div className="mb-6">
          <h1 className="text-2xl">Create User With Hooks.</h1>
          <p>
            info:{" "}
            {create.success && (
              <span className="bg-green-200">user created successfully</span>
            )}{" "}
          </p>
        </div>

        <form onSubmit={(e) => createUser(e)}>
          <div className="mb-6 flex flex-col gap-3">
            <label>Email</label>
            <input
              type="text"
              ref={usernameRef}
              placeholder="Your Username"
              className="p-2.5 border border-gray-300 rounded-md"
              required
            />
            <label>Username</label>
            <input
              type="email"
              ref={emailRef}
              placeholder="Your Email"
              className="p-2.5 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="outline-btn">
            {create.isLoading ? "Loading..." : "Create User"}
          </button>
        </form>
      </div>
    </RootLayouts>
  );
}
