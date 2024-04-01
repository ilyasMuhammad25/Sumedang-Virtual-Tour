import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import Link from "next/link";
import blogDataRamahAnak from "./blogDataRamahAnak";

const RamahAnak = ({title}) => {
  return (
    <section id="blog" className="bg-gray-light dark:bg-bg-color-dark py-5 md:py-10 lg:py-20">

      <div className="container">
        <SectionTitle
          title={title}
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogDataRamahAnak.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center pr-16 lg:pr-0">
  <Link
    href="/signup"
    className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
  >
    Lihat Semua
  </Link>
</div>

    </section>
  );
};

export default RamahAnak;
