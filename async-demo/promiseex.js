console.log('Before');

// getUser(1)
//     .then(result => {
//         console.log(result);
//         getRepositories(result.gitUserName)
//             .then((result) => {
//                 console.log(result);
//                 getCommits(result[0])
//                     .then((commits) => {
//                         console.log(commits);
//                     })
//             })
//     })

// getUser(1)
//     .then((user) => getRepositories(user.gitUserName))
//     .then(repo => getCommits(repo[0]))
//     .then(commits => console.log(commits));

getUser(1)
    .then((user) => {
        console.log(user);
        return getRepositories(user.gitUserName);
    })
    .then(repo => {
        console.log(repo);
        return getCommits(repo[0]);
    })
    .then(commits => console.log(commits));

console.log('After');


function getUser(id) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user from a database....");
            const value = { id: id, gitUserName: 'mfwahid' };
            resolve(value);
        },
            2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading repositories for user ....");
            const value = ['repo1', 'repo2', 'repo3'];
            resolve(value);
        },
            2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading commits for repositorie ....");
            const value = ['commit1', 'commit2', 'commit3'];
            resolve(value);
        },
            2000);
    })

}