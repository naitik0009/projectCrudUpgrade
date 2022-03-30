const notFound = function (request, response) {
  response.status(404).send("Route not found");
};

module.exports = notFound;
