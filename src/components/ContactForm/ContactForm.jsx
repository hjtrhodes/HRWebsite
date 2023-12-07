import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons.jsx"

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xaygrqna");
    if (state.succeeded) {
        return <p>Thanks for your email!</p>;
    }
    return (
        <section className="bg-white dark:bg-gray-900">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact me</h2>
                <div className="mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please feel free to contact me on Github, Linkedin or send me an email below:
                    <SocialMediaButtons />
                </div>



                <form action="https://formspree.io/f/xaygrqna" method="POST" className="space-y-8">
                    <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Your email
                            </label>
                            <input 
                            type="email" 
                            id="email"
                            name="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="name@example.com" 
                            required 
                        />
                    </div>
                    <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Subject
                                </label>
                            <input 
                            type="text" 
                            id="subject" 
                            name="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                            placeholder="Enter subject here..." 
                            required 
                            />
                    </div>
                    <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                Your message
                            </label>
                            <textarea 
                            id="message"
                            name="message" 
                            rows="6" 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                            placeholder="Leave a message..."
                            required>
                            </textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-gray-900 dark:text-white rounded-lg bg-yellow-300 hover:bg-yellow-400 transform hover:scale-110 focus:ring-4 focus:outline-none focus:ring-primary-300 cursor-pointer"
                        >
                        Send email
                        </button>
                    </div>
                </form>
            



        </section>
    );
}

export default ContactForm;
