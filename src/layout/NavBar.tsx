import { ModeToggle } from "@/components/mode-toggle";

const NavBar = () => {
  return (
    <div className="bg-background text-foreground flex-none h-[60px] border-b">
      <div className="flex gap-2 h-full px-2 items-center">
        Sorting Visualizer
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
