type Props ={
    title:string
    className?:string
}

const Title = ({title, className, }:Props) => {
  return (
    <div className={`text-3xl font-bold px-4 ${className}`}>{title}
    
    </div>
  )
}

export default Title