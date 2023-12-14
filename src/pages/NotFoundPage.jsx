import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="fixed flex place-content-center top-0 bottom-0 bg-white z-50">
      <div className="grid container mx-auto p-5 gap-5 place-content-center place-items-center ">
        <div className="grid">
          <h1 className="text-2xl text-primary text-center font-bold">
            Sorry the page not found
          </h1>
          <p className="text-sm text-center">
            Unfortunately this page does not exits. It was probaly deleted or it
            was never there.
          </p>
        </div>
        <video width="200px" autoPlay loop muted>
          <source src="/404.webm" type="video/webm" />
        </video>
        <Link
          to={"/"}
          className="flex items-center gap-x-2 text-lg bg-primary py-2 px-4 rounded-full font-medium opacity-80 transition-all duration-300 hover:opacity-100">
          <FaHome className="text-xl" /> Back To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
