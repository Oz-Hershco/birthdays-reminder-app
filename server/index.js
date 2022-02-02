const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/birthdays/list", async (req, res) => {
    res.json({
        message: "List of birthdays",
        data: [
            {
                id:'oijkefsiokfes',
                name: 'Oz Hershco',
                dob: 'January 16 1991',
                img:''
            }
        ]
    });
});



//update profile using id
// app.post("/profile/update", async (req, res) => {

//     var newProfiledata = req.body;
//     if (newProfiledata) {
//         const userRef = doc(db, 'users', newProfiledata.uid);
//         //handle here image storage and update doc with link once uploaded
//         const setDocRef = await setDoc(userRef, newProfiledata, { merge: true });
//         res.json({
//             message: "Profile updated successfuly",
//             code: 200
//         });
//     } else {
//         res.json({
//             message: "Need data to continue the request!",
//             code: 3
//         });
//     }

// })

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});