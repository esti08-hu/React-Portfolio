import React from 'react'
import "./Contact.css"
import ContactImage from "../Images/contact.jpg"
import { GrSend } from "react-icons/gr";
import Fade from 'react-reveal/Fade';


function Contact() {
    return (
        <div className='contact-section' id='contact'>
            <div class="flex flex-col items-center justify-center mb-4 mt-10 text-2xl font-bold">
                <h5 class="text-gray-900 mt-5">Contact Me</h5>
                <span class="block h-2 bg-gray-400 flex-grow w-12 rounded-full"></span>
            </div>

            <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Fade bottom>
                <div className="flex justify-center items-center">
                    <div className="contact-form-image overflow-hidden">
                        <img src={ContactImage} alt="contact-form-img"/>
                    </div>
                </div>
                </Fade>
                <Fade right>

                <div class=" rounded-lg p-4 flex flex-col">
                    <form>
                        <div class="contact-form flex flex-col gap-2 mb-4">
                            <label for="name">Name</label>
                            <input type="text" id="name" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <div class="contact-form flex flex-col gap-2 mb-4">
                            <label for="name">Email</label>
                            <input type="text" id="email" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <div class="contact-form flex flex-col gap-2 mb-4">
                            <label for="jobTypes">Job Types</label>
                            <select id="jobTypes" class="custom-select-tag form-select rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500">
                                <option value="full-time">Full-time</option>
                                <option value="working-student">Working Student</option>
                                <option value="part-time">Part-time</option>
                                <option value="contact">Contact</option>
                            </select>
                        </div>

                        <div class="contact-form flex flex-col gap-2 mb-4">
                            <label for="message">Message</label>
                            <textarea rows="4" id="message" type="text" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>

                        <div className='submit-btn'>
                            <button><span>Send</span><span><GrSend /></span></button>
                        </div>

                    </form>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Contact