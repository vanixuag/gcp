//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Denis Astahov
//-----------------------------------------------------------------------------

exports.helloWorld111 = (req, res) => {
  const message="<font color='blue'>СloudFunction of Denis Astahov!</font><br><b>App Version 1.5</b>";
  res.status(200).send(message);
};
