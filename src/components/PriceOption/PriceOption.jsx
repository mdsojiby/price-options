import PropTypes  from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className="bg-blue-500 rounded-md p-4 flex flex-col text-white">
            <h2 className="text-center">
            <span className="text-7xl ">{price}</span>
               <span className="text-2xl">/mon</span>
            </h2 >
            <h4 className="text-3xl text-center my-8 flex-grow"> {name}</h4>


            <div className="pl-8">

            {
                features.map(feature=> <Feature  feature={feature}></Feature>)
            }
            </div>

            <button className= "bg-green-500 w-full mt-10 py-2 font-bold rounded-lg hover:bg-gray-950  ">By now</button>
         
            
        </div>
    );
};

PriceOption.propTypes={
    option: PropTypes.object
}

export default PriceOption;