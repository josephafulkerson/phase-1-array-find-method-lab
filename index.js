function superbowlWin(array) {
    let winningYear = array.find((element) => element.result === 'W');
    if (winningYear) {
        return winningYear.year;
    }
}

