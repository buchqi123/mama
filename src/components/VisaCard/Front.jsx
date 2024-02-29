


const CardFrontView = ({ userName, cardNumber, cardMM, cardYY }) => {

    return (
        <div className="w-[425px] h-[270px] bg-card flex flex-col justify-between rounded-2xl">
            <div className="flex items-center p-4">
                <div className="flex items-center w-3/4">
                    <img src="img/visa.png" alt="Visa" />
                </div>
                <div className="w-1/4 flex justify-end">
                    <img className="w-16 h-auto" src="img/chip.png" alt="Chip"/>
                </div>
            </div>
            <div className="px-6 py-4">
                <p className="text-white">Card Number</p>
                <p className="text-white text-2xl tracking-wider">{cardNumber}</p>
            </div>
            <div className="flex justify-between items-center p-4">
                <p className="text-white tracking-widest text-xl px-2">{userName}</p>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white">Valid Thru</p>
                    <p className="text-white">{cardMM} / {cardYY}</p>
                </div>
            </div>
        </div>
    )
}

export default CardFrontView;