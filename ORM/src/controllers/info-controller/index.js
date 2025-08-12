const infoController = (req, res) => {
  return res.json({
    success: "ok",
    message: "",
    error: {},
    data: {},
  });
};

module.exports = {
  infoController,
};
