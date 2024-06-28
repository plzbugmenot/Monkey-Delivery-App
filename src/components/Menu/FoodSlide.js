import star from "../../pages/Menu/images/star.svg"
const FoodSlide = ({ img, description,rate,dessertName}) => {
  return (
    <>
      <div className="mb-1 flex flex-row items-end">
        <div className="absolute mb-4" >
          <div className="px-5 text-base sm:text-3xl  font-bold text-white">
            {description}
          </div>
          <div className="flex flex-row items-center ">
            <div className="text-xs sm:text-base text-[#FC6011] flex flex-row ml-5 mr-1"><img src={star} className="mr-1"/>{rate}</div> 
            <div className="text-white text-xs sm:text-base mr-3">{dessertName}</div>  
            <div className="text-[#FC6011] text-base mb-2">.</div>          
            <div className="text-white text-xs sm:text-base">Desserts</div>   
          </div>
        </div>
        <img src={img} className="w-full " />
      </div>
    </>
  );
};

export default FoodSlide;