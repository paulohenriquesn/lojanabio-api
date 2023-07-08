export const ok = (body) => {
    return {
        statusCode: 200,
        headers: {
        'content-type': 'application/json; charset=utf8'
        },
        body: JSON.stringify(body)
    }
}

export const create = (body) => {
    return {
        statusCode: 201,
        headers: {
        'content-type': 'application/json; charset=utf8'
        },
        body: JSON.stringify(body)
    }
}

export const badRequest = (body) => {
    return {
        statusCode: 400,
        headers: {
        'content-type': 'application/json; charset=utf8'
        },
        body: JSON.stringify({error: body.message})
    }
}

export const serverError = (error) => {
    return {
        statusCode: 500,
        headers: {
        'content-type': 'application/json; charset=utf8'
        },
        body: JSON.stringify({error: error.message})
    }
}


export const unAuthorized = (error) => {
    return {
        statusCode: 401,
        headers: {
        'content-type': 'application/json; charset=utf8'
        },
        body: JSON.stringify({error: error.message})
    }
}