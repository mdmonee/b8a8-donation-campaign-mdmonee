import DonationCards from "./DonationCards";

const Donations = ({donations}) => {
 
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 py-10 mt-10 ">
            {
                donations?.map (donation => <DonationCards key={donation.id} donation = {donation}></DonationCards>)
            }
        </div>
    );
};

export default Donations;