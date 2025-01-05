import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar" 

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <input
        type="text"
        placeholder="Search for project"
        className="border rounded-md px-2 py-1"
      />
      <div className="flex items-center space-x-6">
        <div className="flex justify-between">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        <div className="flex flex-col">
            <span>fetty</span>
            <span className="text-gray-500">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
