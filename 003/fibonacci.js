let runtime = 25;

function fibonacci() { //this is the fibonacci sequence
    let before = 0;
    let actual = 1;
    let next = 1;
    console.log(before);
    console.log(actual)
    for (let i = 0; i < runtime; i++) {
        console.log(next);
        before = actual + next
        actual = next
        next = before
    }
}

fibonacci();