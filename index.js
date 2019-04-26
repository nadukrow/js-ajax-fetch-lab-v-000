function getIssues() {
  // GET /repos/:owner/:repo/issues
  const repo = 'ackerm44/javascript-fetch-lab'

  fetch (`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => res.json().then(json => showIssues(json)))
}
// `${response.items.map(r => displaySearchResult(r)).join('')}`

function renderIssues(j) {
  return `<div>
            <h4>${j.title}</h4>
            <p><em>${j.user.login}</em></p>
            <p>${j.body}</p>
          </div>`
}


function showIssues(json) {
  const issues = `<ul>${json.map(j => renderIssues(j)).join('')}`
  $('#issues').html(issues)
}

function createIssue() {
  const repo = 'ackerm44/javascript-fetch-lab'
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  fetch (`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  // POST /repos/:owner/:repo/forks
  fetch (`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(res => res.json().then(json => showForkedRepo(json)))
}


function showForkedRepo(json) {
  const repo = `<a href='${json.html_url}'>Link To Fork</a>`
  $("#results").html(repo)
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}