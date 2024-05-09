import { Home, LineChart, Package, Package2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const SidebarMobile = () => {
    return (
      <nav className="grid gap-6 text-lg font-medium">
        <Link
          to="#"
          className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
        >
          <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          to="/dashboard"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
          <Home className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          to="/dashboard/supplies"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
          <Package className="h-5 w-5" />
          Supplies
        </Link>

        <Link
          to="/dashboard/create-supply"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
          <Plus className="h-5 w-5" />
          Create Supplies
        </Link>
        <Link
          to="#"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
          <LineChart className="h-5 w-5" />
          Settings
        </Link>
      </nav>
    );
};

export default SidebarMobile;