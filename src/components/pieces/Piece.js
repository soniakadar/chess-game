const Piece = ({
    rank,
    file,
    piece,
}) => {

    const onDragStart = e =>{
        e.dataTransfer.setData('text/plain',`${piece},${rank},${file}`)
        setTimeout(() => {
            e.target.style.display = 'none'
        },0)
      

    }
    return(
         <div className={`piece ${piece} p-${file}${rank}`}
         draggable={true}
         onDragStart={onDragStart}
         />
    )

}

export default Piece 