import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../fireBase.config';
import { message } from 'antd';
import { setUserName } from '../store/userName';
import { useDispatch } from 'react-redux';

interface SignInFormProps {}

const SignInForm: React.FC<SignInFormProps> = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<Array<any>>([]);
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const foundUser = users.find(
      (user) =>
        user.userName === formData.userName &&
        user.password === formData.password
    );
    if (foundUser) {
      dispatch(setUserName(formData.userName));
      message.success('logged in');
      navigate('/category');
    } else {
      message.error('user not found or the one of the input is wrong');
    }
  };

  const userCollectionRef = collection(db, 'userAuth');
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-1/2 bg-gray-800 p-10" onSubmit={handleSubmit}>
        <div className="mb-8">
          <label
            className="block uppercase text-white text-sm font-bold mb-2"
            htmlFor="userName"
          >
            UserName
          </label>
          <input
            type="text"
            id="userName"
            className="appearance-none border-b-2 border-gray-700 bg-transparent w-full text-white p-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your UserName"
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
            Password
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
            Sign In
          </button>
          <div
            onClick={() => navigate('/sign-up')}
            className="inline-block align-baseline font-bold text-sm text-white hover:text-indigo-400"
          >
            Create an account
          </div>
          <div
            onClick={() => navigate('/category')}
            className="inline-block align-baseline font-bold text-sm text-white hover:text-indigo-400"
          >
            if you're offline click here
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
