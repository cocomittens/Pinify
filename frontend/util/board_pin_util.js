export const fetchPins = boardId => {
    return $.ajax({
        method: 'GET',
        url: `api/boards/${boardId}/pins`
    })
}

export const fetchBoards = userId => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}/boards`
    })
}

export const fetchPin = id => {
    return $.ajax({
        method: 'GET',
        url: `api/pins/${id}`
    })
}

export const fetchBoard = id => {
    return $.ajax({
        method: 'GET',
        url: `api/boards/${id}`
    })
}
export const createPin = pin => {
    return $.ajax({
        method: 'POST',
        url: 'api/pins',
        data: { pin }
    })
}

export const createBoard = board => {
    return $.ajax({
        method: 'POST',
        url: 'api/boards',
        data: { board }
    })
}

export const updatePin = pin => {
    return $.ajax({
        method: 'PATCH',
        url: `api/pins/${pin.id}`,
        data: { pin }
    })
}

export const updateBoard = board => {
    return $.ajax({
        method: 'PATCH',
        url: `api/boards/${board.id}`,
        data: { board }
    })
}

window.updatePin = updatePin