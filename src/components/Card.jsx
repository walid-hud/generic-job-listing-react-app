function Card({children , bg = 'bg-gray-100'}) {
  return (
    <div className={`${bg} p-6 rounded-2xl shadow-md`}>
      {children}
    </div>
  )
}

export default Card