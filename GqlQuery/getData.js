module.exports = {
    getData: {
        query: `
        query getData(limit : 100,skip : 200){
            name
            originalId
            email
        }`
    }
}