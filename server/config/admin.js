module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4443e413874e0014297bf781acf6476'),
  },
});
