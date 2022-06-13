// const { nanoid } = require('nanoid');
const greens = require('./greens');

// const addNoteHandler = (request, h) => {
//   const { title, tags, body } = request.payload;

//   const id = nanoid(16);
//   const createdAt = new Date().toISOString();
//   const updatedAt = createdAt;

//   const newNote = {
//     title, tags, body, id, createdAt, updatedAt,
//   };

//   notes.push(newNote);

//   const isSuccess = notes.filter((note) => note.id === id).length > 0;

//   if (isSuccess) {
//     const response = h.response({
//       status: 'success',
//       message: 'Catatan berhasil ditambahkan',
//       data: {
//         noteId: id,
//       },
//     });
//     response.code(201);
//     return response;
//   }
//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan gagal ditambahkan',
//   });
//   response.code(500);
//   return response;
// };

const getAllGreensHandler = () => ({
  status: 'success',
  data: {
    greens,
  },
});

const getGreenByStasiunHandler = (request, h) => {
  const { stasiun } = request.params;

  const green = greens.filter((n) => n.stasiun === stasiun)[0];

  if (green !== undefined) {
    return {
      status: 'success',
      data: {
        green,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Data tidak ditemukan',
  });
  response.code(404);
  return response;
};

const getGreenByTanggalHandler = (request, h) => {
  const { tanggal } = request.params;

  const green = greens.filter((n) => n.tanggal === tanggal)[0];

  if (green !== undefined) {
    return {
      status: 'success',
      data: {
        green,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Data tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  getAllGreensHandler,
  getGreenByStasiunHandler,
  getGreenByTanggalHandler,
};
