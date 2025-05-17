function status(request, response) {
  response.status(200).json({ chave: "Diário de um peregrino do deserto." });
}

export default status;
