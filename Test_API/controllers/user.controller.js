const db = require('../db');

module.exports.count = function (req, res){
    (async () => {
        try{ 
            const age = req.body.age.split('-');
            let countData= [];
            for(let i = age[0]; i <= age[1]; i++){
                const a = await db.find({age: i});
                console.log(a)
                countData.push(`${i}:${a}`);
            }
            res.json(countData)
        }
        catch (err){
            console.log(err)
        }
    })();
}

module.exports.user = function(req, res){
    const userName = req.body.userName;
    const userAge = req.body.age;
    let newUser = new db({
        user: userName,
        age: userAge
    })
    newUser.save((err)=>{
        if(err) console.log(err);
    });
    res.json({userName,userAge})
};