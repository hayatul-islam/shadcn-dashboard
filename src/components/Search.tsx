import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const Search = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="relative w-full">
      <Input
        className="pl-10 border border-stroke-100 bg-stroke w-full"
        type="text"
        placeholder={placeholder}
      />
      <SearchIcon
        size={20}
        className="absolute top-0 left-3 text-gray translate-y-1/2"
      />
    </div>
  );
};

export default Search;
