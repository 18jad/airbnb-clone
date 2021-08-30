function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 footer">

            <div className="space-y-4 footer text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p className="hover:underline cursor-pointer">How Airbnb works</p>
                <p className="hover:underline cursor-pointer">Newsroom</p>
                <p className="hover:underline cursor-pointer">Investors</p>
                <p className="hover:underline cursor-pointer">Airbnb Plus</p>
                <p className="hover:underline cursor-pointer">Airbnb Luxe</p>
                <p className="hover:underline cursor-pointer">HotelTonight</p>
                <p className="hover:underline cursor-pointer">Airbnb for Work</p>
                <p className="hover:underline cursor-pointer">Careers</p>
                <p className="hover:underline cursor-pointer">Made By <a href="https://github.com/18jad" className="font-bold"> @18jad</a></p>

            </div>

            <div className="space-y-4 text-xs footer text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p className="hover:underline cursor-pointer">Diversity & Belonging</p>
                <p className="hover:underline cursor-pointer">Against Discrimination</p>
                <p className="hover:underline cursor-pointer">Accessibility</p>
                <p className="hover:underline cursor-pointer">Airbnb Associates</p>
                <p className="hover:underline cursor-pointer">Frontline Stays</p>
                <p className="hover:underline cursor-pointer">Guest Referrals</p>
                <p className="hover:underline cursor-pointer">Gift Cards</p>
                <p className="hover:underline cursor-pointer">Airbnb.org</p>
            </div>

            <div className="space-y-4 text-xs footer text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p className="hover:underline cursor-pointer">Host your home</p>
                <p className="hover:underline cursor-pointer">Host an Online Experience</p>
                <p className="hover:underline cursor-pointer">Responsible hosting</p>
                <p className="hover:underline cursor-pointer">Resource Center</p>
                <p className="hover:underline cursor-pointer">Community Center</p>
            </div>

            <div className="space-y-4 text-xs footer text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p className="hover:underline cursor-pointer">Our COVID-19 Response</p>
                <p className="hover:underline cursor-pointer">Help Center</p>
                <p className="hover:underline cursor-pointer">Cancellation options</p>
                <p className="hover:underline cursor-pointer">Neighborhood Support</p>
                <p className="hover:underline cursor-pointer">Trust & Safety</p>
            </div>

        </div>
    )
}

export default Footer
