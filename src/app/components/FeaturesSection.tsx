const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4">
        {/* Left Side: Image */}
        <div>
          <img
            src="/1.PNG"
            alt="Feature Image"
            className="w-30 rounded-lg shadow-lg"
          />
        </div>
        {/* Right Side: Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-pink-400">
            Powerful Features for Medical Students
          </h2>
          <p className="text-gray-600 text-lg">
            Clinitime offers a range of settings and detailed statistics. It
            allows users to track and analyze their clinical data and
            volunteering hours, providing comprehensive insights into their
            activities. The app helps users visualize their progress, making it
            easier for them to understand performance trends.
          </p>
          {/* <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mt-1">✔</span>
              <p className="ml-2">
                Easy appointment scheduling with notifications
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mt-1">✔</span>
              <p className="ml-2">Manage patient records securely</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mt-1">✔</span>
              <p className="ml-2">
                Advanced analytics to monitor clinic performance
              </p>
            </li>
          </ul> */}
          <button className=" text-white rounded-lg h-10 justify-center items-center">
            <img src="/appstore.svg" alt="" className="h-auto max-w-4xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
