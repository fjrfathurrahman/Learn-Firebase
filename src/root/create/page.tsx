import { useState } from "react";
import RootLayouts from "../../components/layouts/RootLayouts";
import useCreateValue from "../../lib/hooks/useCreateValue";

export default function CreatePage() {
  const create = useCreateValue();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // This function is responsible for creating a new user in the database.
  const createUser = async (e: any) => {
    e.preventDefault();

    // Define the path where the user data will be stored in the database.
    const path = "users";

    // Define the value object containing the username, email, and type of the user.
    const value = { username: username, email: email, type: "push", };

    // Call the pushValue function from the create hook to push the user data to the specified path in the database.
    await create.pushValue(value, path);

    // Reset the form fields.
    setUsername("");
    setEmail("");
  };

  return (
    <RootLayouts>
      <div>
        <div className="mb-6">
          <h1 className="text-2xl">Create User With Hooks.</h1>
          <p>info: {create.success && <span className="bg-green-200">user created successfully</span>} </p>
        </div>

        <form onSubmit={(e) => createUser(e)}>
          <div className="mb-6 flex flex-col gap-3">
            <InputField label="Username :" type="text" id="username" name="username" value={username} onChange={setUsername}/>
            <InputField label="Email :" type="email" id="email" name="email" value={email} onChange={setEmail}/>
          </div>
          <button type="submit" className="outline-btn">
            {create.isLoading ? "Loading..." : "Create User"}
          </button>
        </form>

      </div>
    </RootLayouts>
  );
}

const InputField = ({ label, type, id, name, value, onChange }: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label>{label}</label>
      <input
        className="p-2.5 border border-gray-300 rounded-md"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}