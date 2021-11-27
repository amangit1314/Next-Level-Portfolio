function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20  ">
      <p className="opacity-70 p-5 group-hover:opacity-100 tracking-widest font-size: 0.75rem font-bold font-mono ">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
