const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
res.status(200).json({

    message: 'Handling GET request to /products'
});

});

router.post('/', (req,res,next) => {
res.status(201).json({

    message: 'Handling POST request to /products'
});

});

router.get('/', (req,res,next) => {
res.status(200).json({

    message: 'Handling GET request to /products'
});

});

router.delete('/', (req,res,next) => {
res.status(200).json({

    message: 'Handling DELETE request to /products'
});

});

router.put('/', (req,res,next) => {
res.status(200).json({

    message: 'Handling PUT request to /products'
});

});


router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message:'you discovered the speacial ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'you passed an Id'
        });
    }
    
});

router.post('/:productId', (re, res, next) => {
res.status(200).json({
    message: 'Updated product'
    });

});

router.put('/:productId', (re, res, next) => {
res.status(200).json({
    message: 'put product'
    });

});

router.delete('/:productId', (re, res, next) => {
res.status(200).json({
    message: 'delete product'
});

});
module.exports = router;