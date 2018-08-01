function makeid(idLength) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < idLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}