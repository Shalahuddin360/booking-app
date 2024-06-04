const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500">
      <Icon size={26} />
      <div className="text-sm font-medium">{label} </div>
    </div>
  );
};

export default CategoryBox;
