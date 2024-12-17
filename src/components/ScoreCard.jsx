/* eslint-disable react/prop-types */
import teamLogo from "../assets/image.png";

const ScoreCard = ({
  matchType,
  key,
  status,
  series,
  t1,
  t2,
  t1img,
  t2img,
  t1s,
  t2s,
}) => {
  return (
    <div
      id={key}
      className="w-80 h-auto bg-gray-400 rounded-lg p-4 shadow-lg m-2"
    >
      <h2 className="text-lg font-bold pb-2 text-center text-black">
        {series}
      </h2>
      <p className="text-gray-900 text-center font-semibold pb-2">
        match type: {matchType}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img src={t1img || teamLogo} className="h-12 w-12 rounded-full" />
          <p className="text-center font-medium text-blue-800">{t1}</p>
          <p className="text-xl text-green-900 pt-2 font-bold">
            {t1s ? t1s : "-"}
          </p>
        </div>
        <span className="text-black">VS</span>
        <div className="flex flex-col items-center">
          <img src={t2img || teamLogo} className="h-12 w-12 rounded-full" />
          <p className="text-center font-medium text-blue-800">{t2}</p>
          <p className="text-xl text-green-900 pt-2 font-bold">
            {t2s ? t2s : "-"}
          </p>
        </div>
      </div>
      <p className="text-lg font-semibold text-blue-950 text-center pt-4">
        {status}
      </p>
    </div>
  );
};

export default ScoreCard;
