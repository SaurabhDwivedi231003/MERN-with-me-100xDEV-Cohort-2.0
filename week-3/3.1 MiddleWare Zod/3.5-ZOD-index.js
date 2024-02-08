// ZOD : input validation library
// npm install zod & https://zod.dev/?id=installation

const express = require('express');
const app = express();
const zod = require('zod');
const port = 3000;

const schema = zod.array(zod.number());   // Mean input shpuld be array of numbers. If not then it will show error

// Wrtiting ZOD Schema example
// {
//     email : string => email
//     password : atleast 8 characters
//     country : "IN" or "US"
// }

function validateInput(obj){
    const schema2 = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8),
        country : zod.enum(["IN", "US"])
    })
    const response = schema2.safeParse(obj);
    // console.log(response)
    return response;
} 
    

app.use(express.json());


app.post('/login', (req, res) => {
    // kidney = [1,2]
    const response = validateInput(req.body);
    if(!response.success){
        res.status(411).json({ msg : "Invalid input" });
    }
   else{
       res.send({
           response
        })
    }
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

//-------------------NOTES--------------------------------------


// Go to ThunderClient or POSTMAN 
// POST : http://localhost:3000/health-checkup
// Body : any correct or incorrect input

// format of output : everything is given in the output so that true reason can be showen in frontend or any other place

// {
//     "result": {
//       "success": false,
//       "error": {
//         "issues": [
//           {
//             "code": "invalid_type",
//             "expected": "array",
//             "received": "undefined",
//             "path": [],
//             "message": "Required"
//           }
//         ],
//         "name": "ZodError"
//       }
//     }
