// <input type="file" onchange="onFileSelected(event)" />
async function onFileSelected(event) {
  // 1) Instantiate Upload.js (at start of app).
  const upload = new Upload({ apiKey: "free" });

  const h1 = document.getElementsByTagName("h1")[0];
  const uploadButton = document.getElementsByTagName("input")[0];

  var pic = document.getElementById("picture");

  try {
    // 2) Hide upload button when upload starts.
    uploadButton.remove();

    // 3) Upload file & show progress.
    const [file] = event.target.files;
    const { fileUrl } = await upload.uploadFile({
      file,
      onProgress: ({ progress }) =>
        (h1.innerHTML = `File uploading... ${progress}%`),
    });

    // 4) Display uploaded file URL.
    h1.innerHTML = `
      File uploaded:
      <br/>
      <br/>
      <a href="${fileUrl}" target="_blank">${fileUrl}</a>`;

    pic.src = `${fileUrl}`;
  } catch (e) {
    // 5) Display errors.
    h1.innerHTML = `Error:<br/><br/>${e.message}`;
  }
}
