export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

export const dataGallery = [
  {
    id: 1,
    nama: "Maria Skłodowska-Curie",
    profesi: "Fisikawan dan kimiawan",
    penghargaan: {
      total: 4,
      namaPenghargaan:
        "Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci",
    },
    penemuan: "polonium (unsur kimia)",
    image: 'https://i.imgur.com/szV5sdG.jpg'
  },
  {
    id: 2,
    nama: "Katsuko Saruhashi",
    profesi: "Ahli Geokimia",
    penghargaan: {
      total: 2,
      namaPenghargaan: "Penghargaan Miyake Geokimia, Penghargaan Tanaka",
    },
    penemuan: "sebuah metode untuk mengukur karbon dioksida pada air laut",
    image: 'https://i.imgur.com/YfeOqp2.jpg'
  },
];