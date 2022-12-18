import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 data-shadow='find your book of choice.' className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>get honest book reviews on amazon | booksirens
get book reviews on amazon, goodreads, & bookbub around your book launch. promote your book to thousands of early book reviewers and book review blogs. Review copies effortlessly. BookHub is one of the best arc review services on the web to help you book review. Review a book today!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header