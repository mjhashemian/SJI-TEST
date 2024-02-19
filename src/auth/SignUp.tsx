import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../fireBase.config';
import { message } from 'antd';

interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const housesCollectionRef = collection(db, 'userAuth');
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    return new Promise((resolve, reject) => {
      addDoc(housesCollectionRef, formData)
        .then(() => {
          message.success('user created successfully!');
          resolve(formData);
          navigate('/sign-in');
        })
        .catch((error) => {
          message.error('Firestore error:', error);
          reject(error);
        });
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-1/2 bg-gray-800 p-10" onSubmit={handleSubmit}>
        <div className="mb-8">
          <label
            className="block uppercase text-white text-sm font-bold mb-2"
            htmlFor="userName"
          >
            userName
          </label>
          <input
            type="userName"
            id="userName"
            className="appearance-none border-b-2 border-gray-700 bg-transparent w-full text-white p-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-8">
          <label
            className="block uppercase text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            Passwordd
          </label>
          <input
            type="password"
            id="password"
            className="appearance-none border-b-2 border-gray-700 bg-transparent w-full text-white p-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-8 flex justify-between items-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <div
            onClick={() => navigate('/sign-in')}
            className="inline-block align-baseline font-bold text-sm text-white cursor-pointer hover:text-indigo-400"
          >
            I'm already a member
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
