const Card = ({card}) => {
    const { id, category, image, description, price, date } = card || {};
    console.log(card);
  return (
    <div>
      <div className="block container mx-auto">
        <img
          alt="Art"
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
         {category}
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
