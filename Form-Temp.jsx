import React, { useState, useEffect } from 'react';

const Form = () => {
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
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch(`/api/categories/${selectedCategory}/courses`);
      const data = await response.json();
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
    <form onSubmit={handleSubmit}> //
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} //
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label> 
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} //
        />
      </div>
      <div>
        <label htmlFor="category">Interested Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="course">Interested Course:</label>
        <select id="course" disabled={!selectedCategory}>
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
