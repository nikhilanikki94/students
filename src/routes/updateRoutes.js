const express = require('express');
const updateRouter = express.Router();

function router(nav){
    
    updateRouter.route('/')
        .get((req,res)=>{
            res.render(
                'update',
                {
                    nav,
                    title:'Update'
                }
            );
        });

        updateRouter.route('/save')
        .post((req,res)=>{
            console.log(req.body);
        });

        return updateRouter;
}

module.exports = router;