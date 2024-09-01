import { useParams } from "react-router-dom";
import { projects } from "../utils/data.json";
import Navbar from "../components/Navbar";
export const SinglePortFolio = () => {
  const params = useParams();
  const item = projects?.find((x) => x?.id?.toString() === params?.id);

  return (
    <main>
      <header className="mb-4 sticky top-0 bg-white z-1">
        <Navbar />
      </header>
      <h1 className="mt-5">{item?.title}</h1>
      <h2>{item?.subtitle}</h2>
      <p className="text-center max-w-[60%] mx-auto my-4">
        {item?.description}
      </p>
      <div className="mt-4 px-4">
        {item?.images?.map((image) => (
          <div
            key={image}
            className=" rounded-[12px] my-6 border-[3px] border-black p-3"
          >
            <img src={image} width="100%" alt={item?.title} />
          </div>
        ))}
      </div>
    </main>
  );
};
