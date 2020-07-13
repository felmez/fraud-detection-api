let transactions = require('./data/test-data.json')
const helper = require('./helper')

// get all transactions
function getTransactions() {
    return new Promise((resolve, reject) => {
        if (transactions.length === 0) {
            reject({
                message: 'no transactions available',
                status: 202
            })
        }
        resolve(transactions)
    })
}

// get single transaction by id
function getTransaction(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(transactions, id)
        .then(transaction => resolve(transaction))
        .catch(err => reject(err))
    })
}

module.exports = {
    getTransactions,
    getTransaction, 
}