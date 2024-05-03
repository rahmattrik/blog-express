"use client"
import { useAppSelector } from "@/redux/hooks";

export const Navbar = () => {
  const { id } = useAppSelector((state) => state.user);

  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <h1 className="font-bold">Logo</h1>

          {Boolean(id) ? (
          <div className="flex items-center gap-8">
            <h4>Home</h4>
            <h4>Write</h4>
            <h4>Profile</h4>
            <h4>Logout</h4>
          </div>
        ) : (
          <div className="flex items-center font-light gap-8">
            <h4>Home</h4>
            <h4>Login</h4>
            <h4>Register</h4>
          </div>
        )}
        </div>
      </div>
    </nav>
  )
};
