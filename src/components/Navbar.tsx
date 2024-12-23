import { Button } from "./ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";



export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isWorkPage = location.pathname === "/work";
  


  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-[1px_2px_0_0_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center xl:px-20 py-4 px-4">
        <h1 className="text-black font-bold text-xl border-2 rounded border-black px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          CodeFlow
        </h1>

        <div className="xl:flex space-x-2 hidden">
          <Link to="/" className="text-black font-semibold px-4 py-2">
            Home
          </Link>
          <Link to="#" className="text-black font-semibold px-4 py-2">
            Docs
          </Link>

          {isWorkPage && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Export</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure to save the flow graph ?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          {!isWorkPage && (
            <>
              <Link to="" className="text-black font-semibold px-4 py-2">
                About
              </Link>
              <Link to="" className="text-black font-semibold px-4 py-2">
                Service
              </Link>
              <Link to="" className="text-black font-semibold px-4 py-2">
                Contact
              </Link>
              <Button onClick={() => navigate("/work")}>Get Started!</Button>
            </>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="neutral" className="xl:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl">CodeFlow</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col mt-5 items-center justify-center gap-5 xl:hidden space-x-2">
              <Link to="/" className="text-black text-xl font-semibold px-4 py-2">
                Home
              </Link>
              <Link to="#" className="text-black text-xl font-semibold px-4 py-2">
                Docs
              </Link>

              {isWorkPage && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Export</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure to save the flow graph ?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}

              {!isWorkPage && (
                <>
                  <Link to="" className="text-black text-xl font-semibold px-4 py-2">
                    About
                  </Link>
                  <Link to="" className="text-black text-xl font-semibold px-4 py-2">
                    Service
                  </Link>
                  <Link to="" className="text-black text-xl font-semibold px-4 py-2">
                    Contact
                  </Link>
                  <Button className="w-full" onClick={() => navigate("/work")}>
                    Get Started!
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
