import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-800">
      <div className="relative z-10 py-12 px-6 lg:px-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-white mb-8">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to contact us.
        </p>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <ContactForm title={'Contact Us'} />
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
