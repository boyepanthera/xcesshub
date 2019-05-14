const   express = require ('express');
const   router = express.Router({
            mergeParams: true
        });

router.get("/volunteers/:vol-id", (req, res) => {
    res.status(200).send('You hit the excess route')
});

module.exports = router;