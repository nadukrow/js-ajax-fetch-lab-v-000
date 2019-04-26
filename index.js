//const token = ''

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch('https://api.github.com/repos/'+ repo +'/forks',
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
   .then(res => res.json())
   .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  $('#results').append(`<a href=${json.html_url}>${json.html_url} </a>` )
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const repo = `81Jeremiah/js-ajax-fetch-lab`;
  //const url = 'https://api.github.com/repos/'+ repo +'/issues';
  const data = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch('https://api.github.com/repos/'+ repo +'/issues', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  const repo = `81Jeremiah/js-ajax-fetch-lab`;
  fetch('https://api.github.com/repos/'+ repo +'/issues', {
    headers: {
     Authorization: `token ${getToken()}`
   }
 })
   .then(res => res.json())
   .then(json => showIssues(json));
}

function showIssues(json){
  $('#issues').append( `${json}`)
}
// function displayIssues(json)
//     for(body in json) {`${body}`)//`Title:${json.title}`
// }