let pa = document.getElementById("pswd");
let btn = document.getElementById("btn");
let image = document.getElementById("bgimage")

pa.addEventListener('input',()=>{
    let pass = pa.value;
      let length = pass.length
      let val = 20 - length * 2
      bgimage.style.filter = `blur(${val}px)`
});
btnn.addEventListener('click',()=>{
  alert("submit");
  })
