

const CardBackView = ({ cardCVV }) => {

    return (
        <div className="w-[425px] h-[270px] bg-card flex flex-col rounded-2xl">
            <div className="h-14 bg-black my-8"></div>
            <div className="flex items-center">
                <div className="h-12 w-3/5 bg-gray-400 ml-4"></div>
                <div className="bg-white w-14 h-8 flex justify-center items-center">{cardCVV}</div>
            </div>
        </div>
    )
}

export default CardBackView;