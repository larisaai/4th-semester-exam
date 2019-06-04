fetch("/data")
  .then(res => res.json())
  .then(data => console.log("data => ", data))
  .catch(err => console.log(err));
