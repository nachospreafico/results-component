const SummaryItem = ({ icon, title, score, color }) => {
  return (
    <div
      className={`flex flex-row items-center justify-between p-4 rounded-xl `}
      id={title}
    >
      <div className="flex flex-row">
        <img src={icon}></img>
        <p style={{ color: `${color}` }} className="text-[18px]">
          {title}
        </p>
      </div>
      <p className="text-[18px] text-[#9D9D9B] font-bold">
        <span className="text-[#303b5a] font-bold">{score}</span> / 100
      </p>
    </div>
  );
};

export default SummaryItem;
