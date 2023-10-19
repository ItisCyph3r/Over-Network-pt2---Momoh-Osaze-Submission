'use client';

import { useState } from "react";

export default function LoginWindow(
  { setUpProfile }: {
    setUpProfile: (form: FormData) => Promise<void>;
  }
) {
  const [error, setError] = useState(''); // TODO #1: State variable to store the current error message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(''); // TODO #3: Set the error state to an empty string

    const form = new FormData(e.target as HTMLFormElement); // Get the form data

    try {
      await setUpProfile(form); // TODO #4: Call the setUpProfile function
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message); // Set the error state to the error message
      } else {
        setError("An unknown error occurred."); // Handle the error appropriately
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col space-y-3'>
        <p className='text-xs font-bold uppercase text-neutral-100'>
          Create Account
        </p>
        <input
          id='username'
          type='text'
          name='username'
          className='rounded border border-neutral-200 bg-neutral-300 px-3 py-2 text-sm'
          placeholder='Username'
          required
        />
        <input
          id='name'
          type='text'
          name='name'
          className='rounded border border-neutral-200 bg-neutral-300 px-3 py-2 text-sm'
          placeholder='Name'
          required
        />
        <div className="w-full">
          <button
            type='submit'
            className='w-full rounded bg-blue-500 py-2.5 text-sm font-medium hover-bg-blue-400 flex flex-row justify-center items-center space-x-2'
          >
            Create Account
          </button>
          <p className="text-red-500">
            {error} {/* TODO #2: Display the error message if it is not an empty string using the error state variable */}
          </p>
        </div>
      </div>
    </form>
  )
}
