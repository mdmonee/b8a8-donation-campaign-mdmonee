

const DonationAddedCard = ({donation}) => {
    const { id, img, tag, title, pic, amount  }  = donation || {}
    return (
        <div >
            <div className="">
            <div className=" gap-2 w-[648px] h-[195px] bg-[#FFE3E4] rounded-lg flex">
                <div className="">
                    <img src={img} alt="" />
                </div>
                
                <div className="my-3 ml-3">
                    

                    <div>
                    <p className="w-20 flex justify-center text-[#FF444A] items-center text-sm h-6 bg-[#FFC3C5] rounded">{tag}</p>
                    </div>

                    <div>
                    <p className="text-black text-xl font-bold pt-2">{title}</p> 
                    <p className="text-[#FF444A]  pt-2">$ {amount}</p>
                    </div>

                    
                    <div className="pt-4">
                    <button className="h-10 w-32 rounded-md font-bold text-white bg-red-500">View Details</button>
                    </div>
                    

                                       
                    
                    
                </div>       
            </div>
            </div>
        
        </div>
    );
};

export default DonationAddedCard;