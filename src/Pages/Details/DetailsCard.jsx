import swal from "sweetalert";
import { useState } from "react"; 

const DetailsCard = ({ details, id }) => {
    if (!details) {
        return <div>Detail not found</div>;
    }

    const { title, pic, amount } = details;
    
   
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleAddToDonation = () => {
        if (!buttonDisabled) {
            const addedDonationArray = [];
            const donationItems = JSON.parse(localStorage.getItem("donation"));
    
            if (!donationItems) {
                addedDonationArray.push(details);
                localStorage.setItem("donation", JSON.stringify(addedDonationArray));
                swal("Good job!", "Donation Successful", "success");
            } else {
                const isExists = donationItems.find((item) => item.id === id);
    
                if (!isExists) {
                    addedDonationArray.push(...donationItems, details);
                    localStorage.setItem("donation", JSON.stringify(addedDonationArray));
                    swal("Good job!", "Donation Successful!", "success");
                } else {
                    swal("Error!", "Already Added!", "error");
                }
            }
            setButtonDisabled(true);
        }
    };

    return (
        <div className="details-card ml-32 w-[1600px] h-[400px]">
            <div className=" ">
                <img src={pic} alt={title} />
            </div>
            
            <button
                className="h-10 w-40 rounded-md font-bold text-white bg-red-500 ml-10 my-4"
                onClick={handleAddToDonation}
                disabled={buttonDisabled} 
            >
                Donate $ {amount}
            </button>
           
            <div className="my-2">
                <h2 className="font-bold text-xl">{title}</h2>
            </div>
            <p>
                There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.
            </p>
        </div>
    );
};

export default DetailsCard;
