import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export  const fetchBooks = createAsyncThunk ("fetch/books", async()=> {
    const res = await axios.get("http://localhost:3000/books")
    return res.data;
});

export const postBooks = createAsyncThunk ("post/books", async(books) => {
    const res = await axios.post("http://localhost:3000/books",books);
    return res.data
})

  export const deleteBooks = createAsyncThunk(
    "delete/books",  
    async(id) => {
    await axios.delete(`http://localhost:3000/books/${id}`);
   return id;
})








const bookSlice = createSlice ({

    name: "books",
    initialState: {
        books: [],
        loading:false,
        error:null,
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchBooks.pending,(state, action) => {
            state.loading = true;

        })
        builder.addCase(fetchBooks.fulfilled,(state, action)=> {
           state.books = action.payload;
           state.loading = false;
        })
        builder.addCase(fetchBooks.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.error.message;
            
        })

        builder.addCase(postBooks.fulfilled ,(state, action) => {
            state.loading = false;
            state.books.push(action.payload);
            console.log(action.payload);

        })

        builder.addCase(deleteBooks.pending , (state, action)=>{
            state.loading = true;
        })
        builder.addCase(deleteBooks.fulfilled, (state, action)=> {
            state.loading = false;
            state.books = state.books.filter(
            (book)=> book.id != action.payload);
            
        })
        builder.addCase(deleteBooks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
           
        });




    },
})

export default bookSlice.reducer;
