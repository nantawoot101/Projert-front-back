const db = require("../models/db");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage }).single('bookimg');

exports.createBook = async (req, res, next) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }

        const { title, author, description, price, stock_quantity, genreId } = req.body;
        const bookimg = req.file.path;
        try {
            if (!(title && author && description && price && stock_quantity && bookimg && genreId)) {
                return res.status(404).json({ error: 'Please provide all required book information' });
            }

            const data = {
                title,
                author,
                description,
                price: parseInt(price),
                stock_quantity: parseInt(stock_quantity),
                bookimg,
                genreId: parseInt(genreId)
            };

            
            const rsb = await db.book.create({data});
            console.log(rsb);

            res.json({ msg: 'เพิ่มสินค้าสำเร็จ' });
        } catch (err) {
            next(err);
        }
    });
}

exports.genresBook = async (req, res, next) => {
    try {
        const { genre_name} = req.body;
        if (!genre_name) {
            return res.status(404).json({ error: 'Please provide all required book information' });
        }

        const data = {
            genre_name
        };

        const rs = await db.genres.create({data});
        console.log(rs);

        res.json({ msg: 'สร้างหมวดหมู่หนังสือสำเร็จ' });
    } catch (err) {
        next(err);
    }
}

