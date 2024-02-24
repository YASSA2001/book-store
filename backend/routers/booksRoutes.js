import express from 'express'
import { Book } from '../modle/bookModle.js';

const router = express.Router()



router.post('/', async (req, res) => {  // create book
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({ message: 'Missing required fields' });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newBook);

        // Provide a meaningful response after successfully creating the book
        res.status(201).send({ message: 'Book created successfully', book });

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});


router.get('/', async(req,res)=>{ // view all books

    try{

        const books = await Book.find({})

        return res.status(200).json({
            count: books.length,
            data: books
        })

    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
}) 

router.get('/:id', async(req,res)=>{ // view one book

    try{

        const {id} = req.params;
        const book = await Book.findById(id)

        return res.status(200).json({
            count: book.length,
            data: book
        })

    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
}) 


router.put('/:id', async(req, res)=>{ // update book

    try {

        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({ message: 'Missing required fields' });
        }

        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).json({message: 'Book not found'})
        }

        return res.status(200).send({message: 'Book update successfully'})
        
    } catch (error) {

        console.log(error.message)
        res.status(500).send({message: error.message})
        
    }
})

router.delete('/:id', async(req,res)=>{ // view one book

    try{

        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id)

        if(!result){
            return res.status(404).send({message:'Book not found'})
        }

        return res.status(200).send({message: "Book deleted successfuly"})

        
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
}) 

export default router