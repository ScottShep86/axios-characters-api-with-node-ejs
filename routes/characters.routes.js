const router = require("express").Router();
const axios = require("axios");

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then(responseFromAPI => {
        // console.log(responseFromAPI)
        res.render("characters/list-characters", { characters: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

router.get("/characters/create", (req, res, next) => {
    res.render("characters/create-character")
})


router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/details-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

router.post("/characters/create", async (req, res, next) => {
    try {
        const {name, occupation, weapon, debt } = req.body
    axios.post("https://ih-crud-api.herokuapp.com/characters", {
        name, occupation, weapon, debt
    })
    .then(responseFromAPI => {
        console.log(responseFromAPI)
        res.redirect("/characters")
    })
} catch (error) {
    console.log(error)
}
})





/* router.post("/characters/create"), (req, res, next) => {
    axios.post(`https://ih-crud-api.herokuapp.com/characters`)
    .then(responseFromAPI => {
        res.redirect("characters")
    })
} */

module.exports = router;



// https://ih-crud-api.herokuapp.com/characters