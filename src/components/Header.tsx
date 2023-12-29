import Search from "./Search";

const Header = () => {
  return (
    <div className="h-[92px] px-8 border-b items-center border-stroke-100 flex justify-between">
      <div className="w-[280px]">
        <Search placeholder="Search" />
      </div>
      <div>ddd</div>
    </div>
  );
};

export default Header;
