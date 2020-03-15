console.log('Before');

getUser(1, (user) => {
    console.log(user);
    getRepositories(user.gitUserName, (repo) => {
        console.log(repo);
        getCommits(repo[0], (commits) => {
            console.log(commits);
        })
    })
});

console.log('After');


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