 const {check,validationResult} =require('express-validator');



exports.registerpost=[
      check('name').not().isEmpty().isLength({min:2}).withMessage('نام را وارد نکردید')
  ]

   