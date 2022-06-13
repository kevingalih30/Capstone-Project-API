const {
  getAllGreensHandler,
  getGreenByStasiunHandler,
  getGreenByTanggalHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/greens',
    handler: getAllGreensHandler,
  },
  {
    method: 'GET',
    path: '/greens/{stasiun}',
    handler: getGreenByStasiunHandler,
  },
  {
    method: 'GET',
    path: '/greens/{stasiun}/{tanggal}',
    handler: getGreenByTanggalHandler,
  },
];

module.exports = routes;
