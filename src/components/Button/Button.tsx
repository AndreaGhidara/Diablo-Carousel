import './Button.css'

export function Button() {
    return(
        <div>
            <button className='buttonCustom shadow-2xl hover:shadow-red-800 hover:text-red-700 '>
                <p>BuyNow!</p>
            </button>
        </div>
    )
}