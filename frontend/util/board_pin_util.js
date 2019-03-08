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
export const createPin = formData => {
    return $.ajax({
        method: 'POST',
        url: 'api/pins',
        data: formData,
        contentType: false,
        processData: false
    })
}

export const createBoard = board => {
    return $.ajax({
        method: 'POST',
        url: 'api/boards',
        data: { board }
    })
}

export const createPinsBoard = pins_board => {
    return $.ajax({
        method: 'POST',
        url: 'api/pins_boards',
        data: { pins_board }
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

export const deletePin = pinId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/pins/${pinId}`
    })
}

export const deleteBoard = boardId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/boards/${boardId}`
    })
}