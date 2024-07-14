import firebaseApp from "../services/firebaseApp";

export default function App() {
  console.log(firebaseApp);

  return(
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-3xl font-medium">
        Welcome to React with <span className="text-orange-500 underline">Firebase.</span>
      </h1>
    </div>
  )
}