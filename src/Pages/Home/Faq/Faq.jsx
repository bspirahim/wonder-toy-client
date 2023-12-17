import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-12'>
            <h1 className='text-center text-3xl font-semibold my-16'>Frequently Ask Question</h1>
            <div className="grid md:grid-cols-2 items-center gap-10">
                <div className=''>
                    <div className="collapse collapse-plus bg-white rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            1. What are the costs to buy a house?
                        </div>
                        <div className="collapse-content">
                            <p>Purchase Price: The actual cost of the house.
                                Down Payment: A percentage of the purchase price paid upfront.
                                Closing Costs: Fees for services and expenses associated with finalizing the sale.
                                Property Taxes and Insurance: Ongoing costs associated with homeownership.
                                Home Inspection and Appraisal Fees: Costs for evaluating the condition and value of the property.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white  rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            2. What are the steps to sell a house?
                        </div>
                        <div className="collapse-content">
                            <p>Prepare Your Home: Make necessary repairs and improvements.
                                Set a Price: Determine a competitive and realistic selling price.
                                Market Your Property: Use various channels to advertise your home.
                                Negotiate Offers: Work with potential buyers to reach a mutually agreeable price.
                                Complete Required Paperwork: Sign necessary documents for the sale.
                                Close the Deal: Transfer ownership and receive payment.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            3. Do you have loan consultants?
                        </div>
                        <div className="collapse-content">
                            <p> Yes, loan consultants are professionals who assist individuals in understanding and securing loans.
                                They can provide advice on different types of loans,
                                help with the application process, and guide borrowers through the financing process.                                    </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            4. When will the project be completed?
                        </div>
                        <div className="collapse-content">
                            <p> The completion date of a construction project depends on various
                                factors such as the size of the project, weather conditions, and unforeseen challenges. It is essential to work
                                closely with the project manager or contractor to get accurate timelines and updates.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-white rounded-none mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">
                            5. What are the steps to rent a house?
                        </div>
                        <div className="collapse-content">
                            <p> Search for Rental Properties: Look for properties that meet your criteria.
                                Contact Landlords or Property Managers: Inquire about availability, terms, and conditions.
                                View Properties: Schedule visits to potential rental units.
                                Submit Rental Application: Provide required documentation and information.
                                Review Lease Agreement: Understand terms and conditions before signing.
                                Pay Security Deposit and Rent: Secure the property by paying the required upfront costs.
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="../../../../public/icon/faq.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;