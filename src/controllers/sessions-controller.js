import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()




const login = async({body},res) => {



 // le dice al prisma cliant buscame el unico que coinsida con el user en la tabla usuario

// ecuentra el user  

  const user = await prisma.user.findUnique ({
    where:{
    email : body.email
    
    }
    
  });
 
 if ( user.pasword==body.password ) {
  res.json({token: "abc"})
  } else {
    res.json({code:401, mensaje: "no valido"})

  
  }

  
}; 



/*const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'contraseña o usuario invalido '
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
}

module.exports = loginRouter*/




export {login};
