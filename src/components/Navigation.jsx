import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "@/nav-items";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.to}>
            <Button asChild variant="ghost">
              <Link to={item.to} className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
