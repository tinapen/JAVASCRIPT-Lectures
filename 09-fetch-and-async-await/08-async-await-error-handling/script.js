const getUsers = async () => {
  try {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const response = await fetch("http://httpstat.us/404");
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Request Failed");
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();
