const Footer = () => {
    return (
        <div className=" mb-10 bg-white py-10">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Gadget Heaven</h1>
                <p className="text-gray-400 pb-5">Leading the way in cutting-edge technology and innovation.</p>
                <div className="h-[1px] w-[70%] mb-5 mx-auto bg-gray-200">

                </div>
            </div>
            <div className="flex justify-around text-center">
                <div>
                    <h1 className="text-xl font-bold mb-3">Services</h1>
                    <ul className="text-gray-600">
                        <li>Product Support</li>
                        <li>Order Tracking </li>
                        <li>Shipping & Delivery </li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-3">Company</h1>
                    <div className="text-gray-600">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Contacts</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-3">Legal</h1>
                    <ul className="text-gray-600">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;