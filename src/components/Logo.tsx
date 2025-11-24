import { Smartphone } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-xl text-primary-foreground shadow-lg">
          B
        </div>
        <Smartphone className="w-4 h-4 text-accent absolute -bottom-1 -right-1" />
      </div>
      <span className="text-xl font-bold text-foreground">B Phones</span>
    </div>
  );
};

export default Logo;
