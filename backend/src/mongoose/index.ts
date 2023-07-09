import * as mongoose from 'mongoose'

const config = () => {
    const mongooseOptions: mongoose.ConnectOptions = {}
    return mongoose.connect(process.env.DB_URL, mongooseOptions)
}

export default { init: () =>{
    return config()
}}
