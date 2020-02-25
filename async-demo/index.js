console.log('Before');

getUser(1,displayGitUser);


console.log('After');

function displayCommits(commits){
    console.log('Commits :' + commits);
}

function displayRepos(repos){
    console.log('Repos : ' + repos);
    getCommits(repos[0],displayCommits);
}

function displayGitUser(err, value) {
    console.log(value);
    getRepositories(value.githubUserName, displayRepos);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from the database...');
        const err = null;
        const value = { id: id, githubUserName: 'mfwahid' };
        callback(err, value);
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling Gihub api...');
        const repos = ['repo1', 'repo2', 'rep3'];
        callback(repos);
    }, 2000);
}


function getCommits(repo, callback){
    setTimeout(() => {
        console.log('Calling Gihub api...');
        const commits = ['cm1', 'cm2', 'cm3'];
        callback(commits);
    }, 2000);
}