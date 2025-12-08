import React from "react";
import avatar from "../../assets/images/avatar.PNG"; // Corrected file name and variable

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center p-4 bg-white shadow-sm">
            
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for items..."
                className="w-96 border rounded-full px-4 py-2"
            />

            {/* User Avatar and Name */}
            <div className="flex items-center gap-3">
                <img
                    src={avatar}
                    alt="User Avatar"
                    className="rounded-full w-10 h-10"
                />
                <div>
                    <p className="font-semibold">Admin</p>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
