import React,{memo} from 'react'

const Input = ({setValue}) => {
  return (
      <input
        type="number"
        placeholder="Degrees Celcius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
  )
}

export default memo(Input)