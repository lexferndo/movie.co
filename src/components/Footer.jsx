import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer w-full bg-black py-10 mt-16">
      <div className="grid container mx-auto p-5 gap-y-5 sm:flex">
        <div className="basis-1/3">
          <ul className="grid gap-y-2">
            <li className="text-2xl font-medium text-primary">Movies.co</li>
            <li className="text-base font-light text-white text-justify">
              Experience the immersive viewing of all time Trending Movie and
              catch up on new series of Movie as they come to our screen. Begin
              your journey down great movies with Movie.co
            </li>
          </ul>
        </div>

        <div className="basis-1/4 ">
          <ul className="grid gap-y-2 sm:justify-center">
            <li className="text-2xl font medium text-white">Categories</li>
            <li>
              <Link to={"/upcoming"}>Upcoming</Link>
            </li>
            <li>
              <Link to={"/nowplaying"}>Now Playing</Link>
            </li>
            <li>
              <Link to={"/popular"}>Popular</Link>
            </li>
            <li>
              <Link to={"/toprated"}>Top Rated</Link>
            </li>
          </ul>
        </div>

        <div className="basis-1/4 ">
          <ul className="grid gap-y-2 sm:justify-center">
            <li className="text-2xl font-medium text-white">About Us</li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/privacypolicy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/terms"}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="basis-1/4">
          <ul className="grid gap-y-2 sm:justify-center">
            <li className="text-2xl font-medium text-white">Contact Us</li>
            <li>
              <Link>Instagram</Link>
            </li>
            <li>
              <Link>Facebook</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
