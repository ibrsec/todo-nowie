

const ToolTip = ({ children, tooltip }) => {

  return (
    <div
      className="group relative inline-block"
    >
      
      {tooltip ? (
        <span 
          className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-slate-500 text-[10px] text-white p-1 rounded absolute top-full mt-2 whitespace-nowrap"
        >
          {tooltip}
        </span>
      ) : null}
      {children}
    </div>
  );
};

export default ToolTip;