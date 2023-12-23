import { Link } from "react-router-dom";


const DonationCards = ({ donation }) => {
    const { id, img, tag, title, pic, amount  }  = donation || {}
    
    return (

        <div>
            <Link to={`/donations/${id}`}>
            <div className="justify-center w-[312px] h-[283px] bg-[#FFE3E4] rounded-lg">
                <div>
                    <img src={img} alt="" />
                </div>
                
                <div className="my-3 ml-3">
                    

                    <div>
                    <p className="w-20 flex justify-center text-[#FF444A] items-center text-sm h-6 bg-[#FFC3C5] rounded">{tag}</p>
                    </div>

                    <div>
                    <p className="text-[#FF444A] text-xl font-bold pt-2">{title}</p> 
                    </div>
                                       
                    
                    
                </div>       
            </div>
            </Link>
        </div>


    );
};

export default DonationCards;