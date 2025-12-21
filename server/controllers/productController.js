import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// function for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // collect and flatten all uploaded file paths from each field
        const imageFields = ['image1', 'image2', 'image3', 'image4'];
        const images = (imageFields.flatMap(field =>
            (req.files && req.files[field]) ? req.files[field].map(f => f.path) : []
        ));

        // upload each file path (string) to Cloudinary
        let imagesUrl = [];
        if (images.length > 0) {
            imagesUrl = await Promise.all(
                images.map(async (filePath) => {
                    const result = await cloudinary.uploader.upload(filePath, { resource_type: 'image' });
                    return result.secure_url;
                })
            );
        }

        console.log('Uploaded image URLs:', imagesUrl);

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestseller: bestseller === 'true' ? true : false,
            sizes: typeof sizes === 'string' ? JSON.parse(sizes) : (sizes || []),
            image: imagesUrl, // <-- store under 'image' to match schema
            date: Date.now()
        };

        console.log('Product Data:', productData);
        const product = new productModel(productData);
        await product.save();

        res.json({ message: 'Product added successfully', images: imagesUrl });
        
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// function for list products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json(products);
    } catch (error) {
        console.error('Error viewing product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// function to remove a product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ error: 'Product id is required in request body' });
        }

        const deleted = await productModel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Product removed successfully' });
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// function for single product info 
const getProductInfo = async (req, res) => {

}

export { addProduct, listProducts, removeProduct, getProductInfo };

