import { FaArrowRight } from "react-icons/fa";

export default function PricingCard({ pricingData }) {
  return (
    <>
      <div
        className="flex flex-col gap-3 col-span-1 border border-gray-600 hover:border-gray-200 hover:bg-gray-500/20 rounded-lg w-auto h-fit p-5 bg-transparent custom-backdrop-blur-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="border-b border-gray-600 pb-2">
          <h5 className="text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-medium text-clutchBlue-300">
            {pricingData.title}
          </h5>
        </div>

        <div className="border-b border-gray-600 pb-3">
          <p className="text-lg lg:text-xl">
            Starting at &#36;{pricingData.startingPrice} per lane
          </p>
        </div>

        <div className="border-b border-gray-600 pb-3">
          <ul className="list-disc ml-8 flex flex-col gap-2">
            {pricingData.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row items-center gap-2 ml-auto w-fit text-xl md:text-2xl leading-none mb-2 mt-3 border-b lg:border-b-2 border-transparent text-clutchBlue-500 hover:text-white hover:border-white transition duration-300 font-medium">
          <a
            href={`mailto:sales@clutchbowling.com?subject=${pricingData.title}%20Package%20Pricing%20Inquiry`}
            target="_blank"
          >
            Contact sales
          </a>
          <div className="text-sm md:text-lg">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
