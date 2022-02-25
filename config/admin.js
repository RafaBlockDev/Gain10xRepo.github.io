module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8ab997b87dd62e7494166fbf6544a968'),
  },
});
