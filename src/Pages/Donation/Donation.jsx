import { useEffect, useState } from "react";
import DonationAddedCard from "./DonationAddedCard";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const defaultCardCount = 4;

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem("donation"));

        if (donationItem) {
            setDonation(donationItem);
        } else {
            setNofound("No Data Found");
        }
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ml-20 justify-center items-center ">
                        {donation
                            .slice(0, showAll ? donation.length : defaultCardCount)
                            .map((donation) => (
                                <DonationAddedCard key={donation.id} donation={donation} />
                            ))}
                    </div>

                    <div className="flex justify-center items-center mt-10">
                        <button
                            className="w-28 h-12 text-center text-white bg-[#009444] rounded-md mb-12"
                            onClick={toggleShowAll}
                        >
                            {showAll ? "See Less" : "See All"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
