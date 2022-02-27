const b = null;

const bd1 = [
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
]

const bd2 = [
    [1,b,b,b,b,b,b,b,b],
    [b,b,b,b,2,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,3,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,2,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
    [b,b,b,b,b,b,b,b,b],
]

const bd3 = [
    [1,2,3,4,5,6,7,8,b],
    [b,b,b,b,b,b,b,b,1],
    [b,b,b,b,b,b,b,b,2],
    [b,b,b,b,b,b,b,b,3],
    [b,b,b,b,b,b,b,b,4],
    [b,b,b,b,b,b,b,b,5],
    [b,b,b,b,b,b,b,b,6],
    [b,b,b,b,b,b,b,b,7],
    [b,b,b,b,b,b,b,b,8],
]

function solve(board){
    if (solved(board)){
        return board
    }else{
        const possibilites = nextBoards(boards)
        const validBoards = keepOnlyValid(possibilites)
        return searchForSolution(validBoards)
    }
}

function searchForSolution(boards){
    if (board.length < 1){
        return false
    }else{
        const first = board.shift()
        var tryPath = solve(first)
        if (tryPath != false){
            return tryPath
        }else{
            return searchForSolution(boards)
        }
    }
}

function solved(board){
    for (var i = 0; i < 9; i++){
        for(var j = 0; j < 9; j++){
            if ([i],[j] === null){
                return false
            }
        }
    }
    return true
}

function nextBoards(board){
    var res = []
    const firstEmpty = findEmptySquare(board)
    if (firstEmpty != undefined){
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (var i = 0; i < 10; i++){
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x]= i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

function findEmptySquare(board){
    for(var i = 0; i <= 9; i++){
        for(var j= 0; j < 9; j++){
            if(board[i][j] == null){
                return [i, j]
            }
        }
    }
}

function keepOnlyValid(boards){
    return boards.filter((b) => validBoard(b)) 
}

function validBoard(board){
    return rowGood(board) && columnGood(board) && boxesGood(board)
}

function rowGood(board){
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(board[i][j])){
                return false
            }else if(board[i][j] != null){
                car.push(board[i][j])
            }
        }
    }
    return true
}

function columnGood(board){
    for (var i = 0; i < 9; i++){
        var cur = []
        for (var j = 0; j < 9; j++){
            if (cur.includes(board[j][i])){
                return false
            }else if(board[j][i] != null){
                car.push(board[j][i])
            }
        }
    }
    return true
}

function boxesGood(board){
    const boxCoordinates= [
        [0,0],[0,1],[0,2],
        [1,0],[1,1],[1,2],
        [2,0],[2,1],[2,2]
    ]
}

for (var y = 0; y < 10; y+=3){
    for (var x = 0; x < 10; x+=3){
        var cur = []
        for(var i = 0; i < 9; i++){
            var coordinates = [...boxCoordinates[i]]
            coordinates[0] += y
            coordinates[1] += x
            if (cur.includes(board[coordinates [0][coordinates[1]]])){
                return false
            }else if(cur.includes(board[coordinates[0][coordinates[1]]])!= null){
                cur.push(board[coordinates[0][coordinates[1]]])
            }
        }
    }
    return true
}

console.log(solve(bd1))
