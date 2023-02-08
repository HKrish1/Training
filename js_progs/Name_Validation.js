const isValidName = (name) => {
    const regex = /^([A-Z]\.( [A-Z]\.)?|[A-Z]\w+ ([A-Z]\w+|[A-Z]\.)) [A-Z]\w+$/;
    return regex.test(name);
  }
  
  const name = "H. G. Wells";
  console.log(isValidName(name));