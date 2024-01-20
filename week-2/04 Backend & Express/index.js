const express = require('express');

const app = express();

const port = 3000;

const users = [
    {
        name: "Jhonny Bro",
        kidneys: [
            {
                healthy: false
            }, {
                healthy: true
            }, {
                healthy: false
            }
        ]
    }
];

app.get('/', function (req, res) {
    const jhonKidney = users[0].kidneys;
    const numberOfKidneys = jhonKidney.length;
    let healthyKidney = 0;

    for (let i = 0; i < numberOfKidneys; i++) {
        if (jhonKidney[i].healthy) {
            healthyKidney = healthyKidney + 1;
        }
    }

    const noOfUnhealthyKidney = numberOfKidneys - healthyKidney;

    res.json({numberOfKidneys, healthyKidney, noOfUnhealthyKidney});
})

app.use(express.json());

app.post('/', function (req, res) {

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
         healthy: isHealthy
        })

    res.json({msg: 'done'})
})

// 411
// convert all unHealthy to healthy kidney
app.put('/', function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({ msg : "Put added"}); 
})

// removing unHealthy kidneys
app.delete('/', function (req, res) {
    if (atleastOneUnhealthyKidneyfn()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({healthy: true})
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: 'Done Bro !'});
    } else {
        res.status(411).json({
            msg : "You have no bad kidneys"
        })
    }
})

function atleastOneUnhealthyKidneyfn() {
    // you should return a 411 only if atleast 1  unhealthy kidney is there do this
    // , else retyrn 411
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(port, function () {
    console.log(`App listening on port ${port}`);
})


// Down ...


//=====================  HTTP METHODS  =================

// GET
// POST
// PUT
// DELETE

//=================== Status Code ==========================

// Code : 200 - Everything Went fine !
// Code : 404 - Something missing.
// Code : 500 - Task is in mid of completion
// Code : 411 - Input were incorrect. (Route missing)