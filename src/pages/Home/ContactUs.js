import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section>
            <div style={{
                background: `url(${appointment})`
            }}
                className="hero min-h-screen bg-base-100 ">
                <div className="hero-content  flex-col w-11/12">
                    <div className=" card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-5 ">
                        <h1 className="text-5xl font-bold text-center">Submit your question</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="subjects" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea className="input input-bordered" name="textArea" id="" cols="30" rows="30"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;