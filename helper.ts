function mustBeInArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'id not found',
                status: 404
            })
        }
        resolve(row)
    })
}

module.exports = {
    mustBeInArray
}