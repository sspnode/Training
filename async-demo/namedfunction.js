console.log('Before');

getUser(1, displayUser);

console.log('After');

function displayUser(user){
    console.log(user);
    getRepositories(user.gitUserName, displayRepositories)
}

function displayRepositories(repo){
    console.log(repo);
    getCommits(repo[0], displayCommits)
}

function displayCommits(commits){
    console.log(commits);
}


function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database....");
        const value = { id: id, gitUserName: 'mfwahid' };
        callback(value);
    },
        2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Reading repositories for user ....");
        const value = ['repo1', 'repo2', 'repo3'];
        callback(value);
    },
        2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log("Reading commits for repositorie ....");
        const value = ['commit1', 'commit2', 'commit3'];
        callback(value);
    },
        2000);
}