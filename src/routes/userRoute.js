import express from 'express';
import controllers from '../controllers/controllers';

const userRoute = new express.Router();

userRoute.get('/newprofile', (req, res) => {
  res.send('creando mi perfil');
});

// userRoute.get('/myprofile',(req,res)=>{
//   res.send('este es mi perfil')
// })

userRoute.get('/myprofile', controllers.userController.personalData);

export default userRoute;
