const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h4 className="text-lg font-semibold mb-4">Clinitime</h4>
          <p className="text-gray-400">The new way to log clinical hours </p>
          <br />
          <p className="text-gray-400">© 2021 RajScape Inc</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:rajscapegames@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                Email us at rajscapegames@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Call us at +1 (224) 558-8478 [toll rates apply, only active
                during business hours]
              </a>
            </li>
          </ul>
        </div>
        {/* Add more sections like "Products", "Contact" */}
      </div>
    </footer>
  );
};

export default Footer;
