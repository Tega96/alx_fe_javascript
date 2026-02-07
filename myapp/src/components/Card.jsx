import Button from './button';


const Card = () => {
    return (
        <div className="flex felx-col items-center justify-center shadow-2">
            <div className='card max-w-100 p-10 m-6 flex flex-col justify-center items-center'>
                <h1 className="text-xl text-gray-800">Title of card</h1>
                <p className="title m-5">
                    This is the description of the card, and I am grateful to be writing this to you right now. 
                </p>
                <Button title="Click me now"/>
            </div>
        </div>
    )
}
export default Card;