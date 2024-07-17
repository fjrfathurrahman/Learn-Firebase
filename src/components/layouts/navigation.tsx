import { NavLink } from "react-router-dom";

const NAVIGATION_ITEMS = [
  { path: "/", name: "Home" },
  { path: "/get data", name: "Get Data" },
  { path: "/create", name: "Create User" },
  { path: "/update", name: "Update User" },
];

const Navigation = () => {
  return (
    <div className="relative py-6 border-b">
      <div className="flex gap-6">
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink className={({isActive}) => isActive ? 'text-blue-500 underline underline-offset-4' : '' } key={item.path} to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
