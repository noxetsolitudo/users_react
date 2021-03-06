const Comp = ({data, title}) => {
  return (
    <div className='comp'>
      <h2>{title}</h2>
      {data.map((item)=>(
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

export default Comp
