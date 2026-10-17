const form = document.querySelector('form')

// this usecase will give you empty value
//  const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e) {
    e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `pls enter a valid height${height}`
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `pls enter a valid weight${weight}`
  } else {
    const bmi = (weight) / ((height*height/10000)).toFixed(2)

    if(bmi < 18.5) {
        results.innerHTML = `<span>${bmi} : under weight</span>`
    } else if(bmi > 24.5) {
        results.innerHTML = `<span>${bmi} : over weight</span>`
    } else 
        results.innerHTML =  `<span>${bmi} : normal weight</span>`
  }
  
})
