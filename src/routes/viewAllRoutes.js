const express = require('express');
const viewAllRouter = express.Router();
const  {studentModel}=require('../models/studentModel');
 

function router(nav){
    var students = [
        {
            name:'Zumaira',
            rollNo:13,
            admno:120013,
            college:'CET, Trivnadrum'
        },
        {
            name:'Akhila',
            rollNo:14,
            admno:120014,
            college:'Sree Narayana Guru College, Payyannur'
        },
        {
            name:'Farhana',
            rollNo:15,
            admno:120015,
            college:'GEC, Kannur'
        },
        {
            name:'Maharifa',
            rollNo:16,
            admno:120016,
            college:'Nehru College, Palakkad'
        },
        {
            name:'Akshay',
            rollNo:19,
            admno:120019,
            college:'GEC, Thrissur'
        }
    ];

    
        viewAllRouter.route('/')
        .get((req,res)=>{
            res.render(
                'viewAll',
                {
                    nav,
                    title:"View All",
                    students
                }
            );
        }
    );
    viewAllRouter.get('/viewAllapi',(req,res)=>{
        studentModel.find((error,data)=>{
            if(error){
                throw error
    
            }
            else{
                res.send(data)
            }
        })
    })
    return viewAllRouter;
}

module.exports = router;
