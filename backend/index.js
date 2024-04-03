const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());
const port = 3002;

const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTYwNDIxLCJpYXQiOjE3MTIxNjAxMjEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJhOWNmZjQ4LWYxMTEtNGNkMC1hZjkxLWUzMjdhZWQxNDIxMyIsInN1YiI6InBwNDMyNkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiUHJlbWFuc2hDb21wYW55IiwiY2xpZW50SUQiOiIyYTljZmY0OC1mMTExLTRjZDAtYWY5MS1lMzI3YWVkMTQyMTMiLCJjbGllbnRTZWNyZXQiOiJlUVFFR05NSWxqTUVPb0xGIiwib3duZXJOYW1lIjoiUHJlbWFuc2ggQ2hhbmRlcml5YSIsIm93bmVyRW1haWwiOiJwcDQzMjZAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjExMTAyNjAxMDIzOCJ9.PEV6jbGbKXh8kmOmMkOi7rb7ZSaE3pk9PsMgdlitjqI';

async function fetchProducts() {
    try {
      const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
        headers: {
          Authorization: `Bearer ${bearerToken}`
        }
      });
      const products = response.data;
      console.log(products);
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; 
    }
  }

app.get('/', (req,res)=>{
    const products = fetchProducts();
    res.json(products);
});

app.listen(port,()=>{
    console.log(`My app server is running on ${port}`);
});