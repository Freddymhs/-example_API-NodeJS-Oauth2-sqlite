import models from '../models/models';

/* return to clients the result from model/querys */
async function personalData(req, res) {
  const consulta = await models.userModel.findAll();

  res.send(consulta);
}

let userController;
export default userController = { personalData };
