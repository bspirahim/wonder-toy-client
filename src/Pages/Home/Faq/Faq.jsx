import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-16'>
            <div className='flex items-center my-16'>
                <div className='flex-none'>
                    <span className="w-1 mx-auto h-12 bg-primary inline-block"></span>
                </div>
                <div className='shrink w-2/4 mx-auto'>
                    <h1 className=' font-bold text-center md:text-3xl'>Frequently Ask Question</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-10 p-2">
                <div className=''>
                    <div className="collapse collapse-plus bg-white rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            1. How can I place an order on the toy marketplace?
                        </div>
                        <div className="collapse-content">
                            <p>Placing an order is easy! Simply browse our wide selection of toys, add your desired items to the cart, and proceed to checkout. Follow the simple steps to provide shipping information and payment details, and your order will be on its way.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white  rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            2.What payment methods are accepted on the toy marketplace?
                        </div>
                        <div className="collapse-content">
                            <p>We accept a variety of payment methods, including credit/debit cards and secure online payment gateways. You can choose the option that suits you best during the checkout process. Rest assured, our payment system is encrypted to ensure the security of your transactions.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            3. Can I track the status of my toy order?
                        </div>
                        <div className="collapse-content">
                            <p> Yes, definitely! Once your order is confirmed, you will receive a confirmation email with a tracking number. Use this number to track your order in real-time and know exactly when your toys will arrive at your doorstep. We want to keep you informed every step of the way.                                   </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            4. What is your return policy for toys purchased on the marketplace?
                        </div>
                        <div className="collapse-content">
                            <p> We have a hassle-free return policy. If you're not satisfied with your purchase, you can return the items within 3 days of receiving them. Please visit our "Returns and Exchanges" page for detailed instructions on initiating a return. We aim to make the process as simple and convenient as possible for our customers.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            5. Are the toys on your marketplace safe for children of all ages?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, the safety of your children is our top priority. We ensure that all toys on our marketplace comply with the highest safety standards and regulations. Each product is thoroughly vetted to meet age-appropriate guidelines and is labeled accordingly. If you have specific concerns or questions about a particular toy, feel free to reach out to our customer support for more information.
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="../../../../public/icon/faq-3.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;