import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoTrainOutline, IoPersonCircleOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const signedIn = true;

export default function Header() {
  return (
    <header className="bg-background/90 backdrop-filter backdrop-blur-sm w-full flex flex-col fixed top-0 inset-x-0 z-50 horizontal-padding justify-center h-[52px]">
      <div className="h-full w-full flex items-center justify-between">
        <Link to="/">
          <RiRobot2Line className="w-7 h-7" />
        </Link>
        <div className="flex items-center gap-4 md:gap-5">
          {signedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <IoPersonCircleOutline className="text-secondary-foreground w-8 h-8" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="bg-secondary -m-1 p-2">
                  johndoe@proton.me
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                // onClick={() => logout()}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              // onClick={() => loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
