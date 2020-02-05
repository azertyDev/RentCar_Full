const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.DATABASE_URI
    },
    default:{
        SECRET: 'SECRETKEY',
        DATABASE: 'mongodb+srv://user:1111@cluster0-jr3g3.mongodb.net/test?retryWrites=true&w=majority'
    }
}

exports.get = (env) => {
    return config[env] || config.default
};
