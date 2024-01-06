import SummaryItem from "./SummaryItem";

const Summary = ({ summaryData }) => {
  return (
    <div
      id="summary"
      className="w-screen h-[453px] md:max-w-[365px]  md:max-h-[512px] p-7 md:pb-11 flex flex-col justify-between gap-4"
    >
      <h2 className="text-[20px] text-[#303b5a] font-bold">Summary</h2>
      <div className="flex flex-col gap-4">
        {summaryData.map((elem, index) => {
          return (
            <SummaryItem
              title={elem.title}
              icon={elem.icon}
              key={index}
              score={elem.score}
              color={elem.color}
            />
          );
        })}
      </div>
      <button className="w-full py-4 text-[18px] text-white font-medium bg-[#303b5a] rounded-full mt-8">
        Continue
      </button>
    </div>
  );
};

export default Summary;
