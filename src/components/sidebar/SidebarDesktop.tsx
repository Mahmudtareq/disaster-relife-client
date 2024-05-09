import { Home, Package, Package2, Plus, Settings } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const SidebarDesktop = () => {
  const location = useLocation();
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <NavLink
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </NavLink>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="mb-3">
              <NavLink
                to="/dashboard"
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  location.pathname === "/dashboard" ? "bg-accent border" : ""
                }`}
              >
                <Home className="h-6 w-6" />
                <span className="sr-only">Dashboard</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="mb-3">
              <NavLink
                to="/dashboard/supplies"
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  location.pathname === "/dashboard/supplies"
                    ? "bg-accent border"
                    : ""
                }`}
              >
                <Package className="h-6 w-6" />
                <span className="sr-only">Supplies</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Supplies</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to="/dashboard/create-supply"
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  location.pathname === "/dashboard/create-supply"
                    ? "bg-accent border"
                    : ""
                }`}
              >
                <Plus className="h-6 w-6" />
                <span className="sr-only">Create Supplies</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Create Supplies</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default SidebarDesktop;
