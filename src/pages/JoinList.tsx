import emailjs from "emailjs-com";
import { useState } from "react";
const JoinList = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    carType: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6wqgg2s", // Replace with your EmailJS service ID
        "template_mnmzfia", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          carType: formData.carType,
          description: formData.description,
        },
        "vDBkO8UZ2V6IQ5dNk" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            name: "",
            email: "",
            description: "",
            carType: "",
          });
        },
        (error) => {
          alert("Failed to send email.");
          console.error("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div className="font-jura text-center">
        <p className="text-3xl m-7 font-extrabold">Join the Waitlist</p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto text-start"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="carType"
              className="block text-sm font-medium text-gray-700"
            >
              Type of Car
            </label>
            <select
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select a car type
              </option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="convertible">Convertible</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a description"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default JoinList;
