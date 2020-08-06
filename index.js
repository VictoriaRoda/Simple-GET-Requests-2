'use strict';

function getDogImage(num) {
  const url = "https://dog.ceo/api/breeds/image/random/" + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
}

function checkValidForm(val) {
  if(val >= 1 && val <= 50) {
    return true;
  }
  else {
    return false;
  }
}

function displayResults(responseJson) {
  let imageList=responseJson.message;
  console.log(imageList);
  let imageUrls="";

  for(let i =0; i<imageList.length; i++) {
    imageUrls += `<img src="${imageList[i]}" alt="Dog Image # ${i+1}" class="results-img">`;
  }
    
  console.log(imageUrls);

  $('.results hidden').replaceWith(`<div class="results-img">${imageUrls}</div>`);
  
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let resultNum = $("#num").val();
    if(checkValidForm(resultNum)) {
      console.log(`Results to retrieve: ${resultNum}`);
      getDogImage(resultNum);
    }
    else {
      alert("Sorry. You must pick a number between 1 and 50. Try again.")
    }
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});