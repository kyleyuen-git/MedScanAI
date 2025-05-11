import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Login from "@/Login";
import { UserContext } from "@/context";
import './navbar.css';

export default function Navbar() {
  const { setUser } = useContext(UserContext);

  return (
    <nav className="shadow-sm">
      <div className="navbar">
        <div className="nav-title">
          <img src="/lilccletittapwithdabass.jpg" className="logo" alt="MediScan AI logo" />
          <a href="/" className="cc">MediScan AI</a>
        </div>
        <div className="flex items-center">
          <div className="nav-items">
            <a href="/diagnose" className="nav-item">Describe Symptoms</a>
            <a href="https://dbemjtx2y7uld.cloudfront.net/index.html" className="nav-item">Chatbot</a>
          </div>

          <div className="ml-8">
            <NavigationMenu className="dropdown">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="user">
                    <Login />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="nav-dropdown">
                    <div className="dropdown">
                      <NavigationMenuLink className="create-events">
                        My Records
                      </NavigationMenuLink>
                      <NavigationMenuLink className="create-events">
                        Saved Diagnoses
                      </NavigationMenuLink>
                      <NavigationMenuLink className="create-events">
                        Appointments
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        onClick={() => {
                          localStorage.removeItem("user");
                          setUser(undefined);
                        }}
                        className="create-events"
                      >
                        Log out
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
