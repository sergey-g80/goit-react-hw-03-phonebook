import './CardContent.scss'
export const CardContent =({title, duration, price}) => {
return (
    <div className='card-content-conteiner'>
        <h1>{title}</h1>
        <p>{duration}</p>
         <p><span>$</span>{price}</p>  
    </div>
)

}