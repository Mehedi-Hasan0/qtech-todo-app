import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const todosParams = searchParams.get("todos");
  return (
    <nav className="flex flex-row items-center justify-between min-w-[320px] md:max-w-xl border-b border-[#ccc]">
      <Link
        to="/"
        className={`${todosParams === null ? "active" : "non-active"}`}
      >
        All
      </Link>
      <Link
        to="/?todos=active"
        className={`${todosParams === "active" ? "active" : "non-active"}`}
      >
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className={`${todosParams === "completed" ? "active" : "non-active"}`}
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
