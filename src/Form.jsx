

export default function Form() {


    return (
        <>
        <div className="container mx-auto p-4">
            <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl text-center font-bold mb-4 ">Contact Form</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                    <input className="rounded w-full py-2 px-3 text-gray-700 leading-tight" id="name" type="text" placeholder="Enter your name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input className="rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="email"  placeholder="Enter your email"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category:</label>
                    <select className="rounded w-full py-2 px-3 text-gray-700 leading-tight" id="category" >
                    <option value="">Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">Course:</label>
                    <select className="rounded w-full py-2 px-3 text-gray-700 leading-tight" id="course">
                    <option value="">Select a course</option>
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                    <option value="course3">Course 3</option>
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