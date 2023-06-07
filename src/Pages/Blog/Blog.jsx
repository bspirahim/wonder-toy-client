import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h1>this is blog</h1>
        </div>
    );
};

export default Blog;