// const apiURL = "https://pla5twe5ude4dlsl64aqkancsu0kjxid.lambda-url.us-west-2.on.aws/"; // or API GW URL

// const presigned = await fetch(apiURL, { method: "POST" })
//                           .then(r => r.json());

// console.log(presigned.uploadUrl);   // PUT here
// console.log(presigned.objectKey);   // stored key in S3

// await fetch(presigned.uploadUrl, {
//     method: "PUT",
//     headers: { "Content-Type": "application/pdf" },
//     body: file                      // the File object from <input type=file>
//   });
  
/*  adjust the URL to match your own Lambda‑function URL  */
const apiURL = "https://pla5twe5ude4dlsl64aqkancsu0kjxid.lambda-url.us-west-2.on.aws/ ";

document.getElementById("uploadBtn").onclick = () => {
  document.getElementById("pdfInput").click();
};

document.getElementById("pdfInput").onchange = async (e) => {
  const file = e.target.files[0];
  if (!file || file.type !== "application/pdf") {
    alert("Please choose a PDF file.");
    return;
  }

  try {
    /* 1️⃣  ask backend for a presigned URL */
    const presigned = await fetch(apiURL, { method: "POST" }).then(r => r.json());

    console.log("PUT to:", presigned.uploadUrl);
    console.log("Will be stored as:", presigned.objectKey);

    /* 2️⃣  upload the PDF directly to S3 */
    await fetch(presigned.uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/pdf" },
      body: file
    });

    alert("✅ PDF uploaded!  Lambda parser will process it shortly.");

  } catch (err) {
    console.error(err);
    alert("Upload failed—check console.");
  }
};
