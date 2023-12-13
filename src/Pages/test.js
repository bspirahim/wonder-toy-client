<div className="card w-auto bg-base-100 shadow-xl mb-5">
<figure><img src={ethnic.img} className='w-full h-48 object-cover' alt="Shoes" /></figure>
<div className="card-body">
    <h2 className="card-title">{ethnic.toyName}</h2>
    <p>Price: {ethnic.price}</p>
    <p>Rating: {ethnic.rating}</p>
    <div className="card-actions justify-end">
        <Link to={`/toy/${ethnic._id}`}><button className='btn btn-primary'>View Details</button></Link>
    </div>
</div>
</div>