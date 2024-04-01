import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Alun alun Sumedang",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    deskripsi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/monumen-lingga.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/monumen-lingga.jpg",
      designation: "Graphic Designer",
    },
    tags: ["alun-alun"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Bandung giri gahana golf",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    deskripsi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/BGG-Landscape.jpg",
    author: {
      name: "Bandung giri gahana golf",
      image: "/images/blog/BGG-Landscape.jpg",
      designation: "Content Writer",
    },
    tags: ["Bandung giri gahana golf"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Batu ciagung.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
   deskripsi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/batu.jpg",
    author: {
      name: "Batu ciagung",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Batu ciagung"],
    publishDate: "2024",
  },
  {
    id: 4,
    title: "Cipanas Cileungsing.",
    paragraph:
      "Tempat wisata di Sumedang berikutnya adalah pemandian air panas Cileungsing yang ada di Desa Cilangkap. Pemandian air panas ini sangat populer bagi masyarakat sekitar, tidak heran kalau pemandian ini selalu ramai oleh wisatawan, terutama saat liburan atau akhir pekan..",
   deskripsi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/cipanas.jpeg",
    author: {
      name: "Cipanas Cileungsing",
      image: "/images/blog/cipanas.jpeg",
      designation: "Cipanas Cileungsing",
    },
    tags: ["Cipanas Cileungsing"],
    publishDate: "2024",
  },
  {
    id: 5,
    title: "Cipelang.",
    paragraph:
      "Salah satu objek wisata yang berada di Desa Cipamekar Kecamatan Conggeang. Wisata ini memanfaatkan potensi mata air yang berada di kaki Gunung Tampomas bagian timur. Awalnya merupakan mata air yang menjadi sumber air bagi kawasan sekitar",
   deskripsi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/cipelang.jpg",
    author: {
      name: "Cipelang",
      image: "/images/blog/cipelang.jpg",
      designation: "Cipelang",
    },
    tags: ["Cipelang"],
    publishDate: "2024",
  },
  {
    id: 6,
    title: "Curug Ciputrawangi.",
    paragraph:
      "Curug ini berada di gunung Tampomas. Nilai plus tersendiri untuk anda yang mendaki gunung ini, karena bisa menemukan air terjun yang indah. Beberapa jalur pendakian seperti jalur Narimbang, Cibeureum, dan Buahdua menjadi jalur favorit untuk pendaki.",
    deskripsi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      image: "/images/blog/ciputrawangi.jpg",
    author: {
      name: "Curug Ciputrawangi",
      image: "/images/blog/ciputrawangi.jpg",
      designation: "Curug Ciputrawangi",
    },
    tags: ["Curug Ciputrawangi"],
    publishDate: "2024",
  },
];
export default blogData;
