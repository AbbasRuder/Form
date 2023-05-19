import React, { useState, useEffect } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        // Fetch categories from the backend API
        fetchCategories();
      }, []);
    
      const fetchCategories = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/categories');
          const data = await response.json();
          console.log(data)
          setCategories(data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
    
      const fetchCourses = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/categories/${selectedCategory}/courses`);
          const data = await response.json();
          console.log(data);
          setCourses(data);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
    
      const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        fetchCourses();
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data to the backend API
        // Add your logic here
      };

    return (
        <>
        <div className="container mx-auto p-4">
            <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl text-center font-bold mb-4 ">Contact Form</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                    <input className="rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        placeholder="Enter your name"
                        id="name"
                        type="text"
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input className="rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        placeholder="Enter your email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Interested Category:</label>
                    <select className="rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="category" 
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select a category</option>
                        {categories.map(category => {
                            return <option className='text-black-100' key={category.id} value={category.id}>
                                    {category.name}
                                   </option>
                        })}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">Interested Course:</label>
                    <select className="rounded w-full py-2 px-3 text-gray-700 leading-tight"
                        id="course"
                        disabled={!selectedCategory}
                    >
                        <option value="">Select a course</option>
                        {courses.map(course => {
                            return <option key={course.id} value={course.id}>{course.name}</option>
                        })}
                    </select>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}