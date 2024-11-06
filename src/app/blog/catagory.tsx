import Link from "next/link";


const Catagory = () => {
    return (
        <div className="card-body shadow-xl">
        <p className="card-title">Catagory Name</p>
        <ul>
            <li><Link href="#">web Development</Link></li>
            <li><Link href="#">Digital Markeing</Link></li>
            <li><Link href="#">Fiver Markeing</Link></li>
            
        </ul>
    </div>
    );
};

export default Catagory;