import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div>
      {/* Use an iframe to embed the external web page */}
      <iframe
        src="https://tawk.to/chat/660359a3a0c6737bd1253364/1hpuhcbpf"
        title="Embedded Web Page"
        width="100%"
        height="500px"
        frameBorder="0"
      />
    </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
