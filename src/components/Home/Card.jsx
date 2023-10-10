const Card = ({ card }) => {
  const { id, category, image, description, price, date } = card || {};
  console.log(card);
  return (
    <div>
      <div className="block container mx-auto">
        <img
          alt="Art"
          src={image}
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <div className="px-4">
          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {category}
          </h3>

          <p className="mt-2 max-w-sm text-gray-700 text-xl">{description}</p>
          <p className="mt-2 max-w-sm text-gray-700 font-bold">Date: {date}</p>
          <p className="mt-2 max-w-sm text-gray-700 mb-2">Total Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
