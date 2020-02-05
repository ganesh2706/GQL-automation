module.exports = {
    getData: {
        validQuery: `
        query getData(limit: 1,skip : 200){
            name
            originalId
            email
        }`,
        invalidLimit: `
        query getData(limit : "1",skip : 200){
            name
            originalId
            email
        }`,
        invalidSkip: `
        query getData(limit : 100,skip : "1"){
            name
            originalId
            email
        }`,
        linitIsBlank: `
        query getData(limit:"",skip : 200){
            name
            originalId
            email
        }`,
        skipIsBlank: `
        query getData(limit:100,skip:"" ){
            name
            originalId
            email
        }`
    },

    headers: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNmQ2NTNiYTA4YzE5MDA1MjM1ZWE1MiIsImlhdCI6MTU2MDc0NTQzNn0.8cdgvP-FlYkK654xENFq9Z2tHvj5kdUYVqD7STFsO_0"
    }
}