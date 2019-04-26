
function getIssues() {
  const repo = 'Adjoa/javascript-fetch-lab'
  
  // GET /repos/:owner/:repo/issues
  fetch(`https://api.github.com/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}


function showIssues(json) {
   const issues_html = `
    <ul>
      ${json.map(issue => `
      <li>
        <p>${issue.title}</p>
        <p>${issue.body}</p>
        <p>${issue.user.login}</p>
      </li>`).join('')}
    </ul>`
  
  $('#issues').html(issues_html)
}


function createIssue() {
  const repo = 'Adjoa/javascript-fetch-lab'
  const postData = {
    "title": `${document.getElementById('title').value}`,
    "body": `${document.getElementById('body').value}`,
  }

  // POST /repos/:owner/:repo/issues
  fetch(`https://api.github.com/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues());
}


function showResults(json) {
  html_string= `<a href=${json.html_url}>${json.name}</a>`
  $('#results').html(html_string)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  // POST /repos/:owner/:repo/forks
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}