const Score = () => {
  return (
    <div
      id="score"
      className="w-screen md:max-w-[365px] h-[356px] md:h-[512px] md:pb-11 rounded-bl-3xl rounded-br-3xl flex flex-col items-center justify-between p-7"
    >
      <h1 className="text-[#C1C1FF] text-[22px]">Your Result</h1>
      <div
        id="score-circle"
        className="w-[140px] h-[140px] rounded-full flex flex-col items-center justify-center"
      >
        <p className="text-6xl font-bold text-white">76</p>
        <p className="text-[#8379FF]">of 100</p>
      </div>
      <h2 className="text-2xl text-white font-medium">Great</h2>
      <p className="text-[18px] text-center text-[#C1C1FF]">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Score;
