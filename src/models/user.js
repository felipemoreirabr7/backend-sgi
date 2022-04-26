const db = require("../config/db")
const { hash } = require("bcrypt")


module.exports = {
    async create(data){
        const { name, user1, password } = data
        const query = `INSERT INTO users (
            user1,
            name,
            password
        ) VALUES ($1, $2, $3)`
            
        const passwordHash = await hash(password, 8)

        const values = [
            user1,
            name, 
            passwordHash
        ]
        
        db.query(query, values)
    },
    
    

    async pontoAsaNorte(data){
        

        const query = `INSERT INTO ponto (
            user1,
            lat,
            long,
            campus
        ) VALUES ($1, $2, $3, $4)`
            
        const campus = "Asa Norte"

        const values = [
            data.userName,
            data.latitude,
            data.longitude,
            campus
        ]
        
        db.query(query, values)

    },
    async pontoTaguatinga(data){
        

        const query = `INSERT INTO ponto (
            user1,
            lat,
            long,
            campus
        ) VALUES ($1, $2, $3, $4)`
            

        const campus = "Taguatinga II"

        const values = [
            data.userName,
            data.latitude,
            data.longitude,
            campus
        ]
        
        db.query(query, values)

    }
    
}
    

