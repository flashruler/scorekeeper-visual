import RandomizationOne from "../svgs/randomizationOne";
import RandomizationThree from "../svgs/randomizationThree";
import RandomizationTwo from "../svgs/randomizationTwo";

const displayRandomizeSVG = (randomization: number) => {
  if (randomization === 1 || randomization === 4) return <RandomizationOne />;
  if (randomization === 2 || randomization === 5) return <RandomizationTwo />;
  if (randomization === 3 || randomization === 6) return <RandomizationThree />;
};

export default function Randomization({
  randomization,
}: {
  randomization: number;
}) {
  return (
    <div className="w-[1920px] h-[1080px] bg-green-500">
      <h1 className="absolute ml-[94px] mt-[51px] text-[36px] leading-[42px] uppercase text-white font-light italic z-20">
        Randomization Position {randomization}
      </h1>
      {displayRandomizeSVG(randomization)}

      {/* HTML tag for video here that will be played, 3 videos depending on which randomization position */}
    </div>
  );
}
