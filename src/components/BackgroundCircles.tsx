const BackgroundCircles = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border [#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute rounded-full border [##E7AB0A] opacity-20 h-[650px] w-[650px] animate-pulse mt-52" />
      <div className="absolute border[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
    </div>
  );
};

export default BackgroundCircles;
