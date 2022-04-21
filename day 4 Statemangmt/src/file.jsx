

// Parent to Child Smaple Below...
function App(data) {

  const handleChange = (value) => {
    console.log("hey", value);

  };

  return First(handleChange);
}

function First(handleChange) {

  const data = "test";
  handleChange(data);

}
