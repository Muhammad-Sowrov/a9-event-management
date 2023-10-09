import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DataCard = ({ data }) => {
  const { category, image, description, price, date } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={image}
              alt="img"
              className="rounded-xl h-60 w-60 md:h-70 md:w-96"
            />
          </div>
        </figure>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="card-body  text-start"
        >
          <h2 className="card-title">{category}</h2>
          {description.length > 100 ? (
            <p>
              {description.slice(0, 100)}
              <Link>
                {" "}
                <button className="px-1 py-1 rounded-sm text-white bg-slate-700">
                  Read More...
                </button>
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataCard;
