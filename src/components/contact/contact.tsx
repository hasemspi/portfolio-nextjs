
"use client"
import { useState, FormEvent } from 'react';

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
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-8">Contact Page</h2>

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
  <div className="col-span-1 md:col-span-2 p-4 pb-10 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-2">Title Two</h3>
    <p className="text-left mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet illo est consequatur maiores totam vero nemo fuga impedit.
    </p>
  </div>
</div>




  </div>
</section>




    );
};

export default ContactPage;
