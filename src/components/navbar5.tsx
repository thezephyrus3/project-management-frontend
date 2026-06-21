import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface Navbar5Props {
  className?: string;
}

const Navbar5 = ({ className }: Navbar5Props) => {
  const navLinks = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Projects", href: "/projects" },
    { title: "Tasks", href: "/tasks" },
  ];

  return (
    <section className={cn("py-4", className)}>
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter">
              Project Manager
            </span>
          </Link>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to={link.href}>{link.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="default" asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link to="/" className="flex items-center gap-2">
                    <span className="text-lg font-semibold tracking-tighter">
                      Project Manager
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      to={link.href}
                      key={link.href}
                      className="font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline" asChild>
                    <Link to="/login">Sign in</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
