module.exports = (ADMIN_ID) => {
  return (ctx) => ctx.from.id === ADMIN_ID;
};