const express = require('express');
const searchRouter = express.Router();

function router(nav){
    searchRouter.route('/')
        .get((req,res)=>{
            res.render(
                'search',
                {
                    nav,
                    title:'Search Student'
                }
            );
        });

    searchRouter.route('/save')
        .post((req,res)=>{
            console.log(req.body);
        });

    return searchRouter;
}

module.exports = router;