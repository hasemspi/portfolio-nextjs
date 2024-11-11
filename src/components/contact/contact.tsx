
"use client"
import { useState, FormEvent } from 'react';

import IconPhone from "../../asset/image/icon/phone.svg";
import location from "../../asset/image/icon/location.svg";
import emails from "../../asset/image/icon/email.svg";

import Image from 'next/image';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-12 style={{ backgroundColor: 'var(--background)' }}">

      <div className="flex flex-col justify-center items-center mx-4 mb-10">
        <h2 className="text-4xl font-bold text-center">
        Contact Page
        </h2>
        <p className="mt-4 px-4 md:px-20 text-lg md:text-xl font-semibold text-center">
        Get in touch! Reach out for questions, support, or collaboration opportunities. I’m here to help!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* First Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-1 md:col-span-3 p-4 pb-10 rounded-lg border border-gray-200 shadow-md" >

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-control mb-4 " >
                <label className="label">
                  <p>Your Name</p>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full border-gray-300"
                  style={{ backgroundColor: 'var(--navbar-background)' }}
                  required
                />
              </div>

              {/* Email and Phone in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-control">
                  <label className="label">
                    <p>Email</p>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    style={{ backgroundColor: 'var(--navbar-background)' }}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <p>Phone</p>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    style={{ backgroundColor: 'var(--navbar-background)' }}
                    maxLength={15}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-control mb-4">
                <label className="label">
                  <p>Message</p>
                </label>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  style={{ backgroundColor: 'var(--navbar-background)' }}
                  rows={4}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="form-control">
                <button type="submit" className="btn btn-primary w-full">
                  Submit
                </button>
              </div>
            </form>

          </div>
          <div className="col-span-1 md:col-span-2 p-4 pb-10 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="space-y-4 mt-32">
              <div className="flex items-center">
                <Image
                  src={IconPhone}
                  width={50}
                  height={50}
                  alt="Description of the image"
                  className='mr-5'
                />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+088 01987913922</p>
                </div>
              </div>

              <div className="flex items-center">
                <Image
                  src={location}
                  width={50}
                  height={50}
                  alt="Description of the image"
                  className='mr-5'
                />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>hasemspi@email.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Image
                  src={emails}
                  width={50}
                  height={50}
                  alt="Description of the image"
                  className='mr-5'
                />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>kallyanpur Road-01 <br /> Mirpur-1</p>
                </div>
              </div>
            </div>
          </div>


        </div>




      </div>
    </section>




  );
};

export default ContactPage;
