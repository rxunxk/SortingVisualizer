import { ModeToggle } from "@/components/mode-toggle";
import { Github } from "lucide-react";

const NavBar = () => {
  return (
    <div className="bg-background text-foreground flex-none h-[60px] border-b">
      <div className="flex gap-2 h-full px-2 items-center justify-between">
        <div className="font-bold text-[1.2rem]">Sorting Visualizer</div>
        <div className="flex gap-2 items-center">
          Made by
          <a
            href="https://github.com/rxunxk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-bold text-[1.2rem]"
          >
            Raunak Pandey
            <Github />
          </a>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
