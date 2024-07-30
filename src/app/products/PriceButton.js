"use client"
import React from 'react'

function PriceButton({price}) {
  return (
    <>
        <button onClick={() => alert(price)}>Get Price</button>
    </>
  )
}

export default PriceButton