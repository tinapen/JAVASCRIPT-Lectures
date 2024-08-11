fetch("https://httpstat.us/200")
  .then((response) => {
    // console.log(response.status);
    // console.log(response.statusText);
    // if (!response.ok) {
    //   throw new Error("Request Failed");
    // }
    if (response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
  })
  .then(() => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });
