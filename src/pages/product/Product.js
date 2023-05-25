import React from 'react'
import { useParams } from 'react-router-dom'
import ProductPageHeader from '../../components/ProductPageHeader'

export default function Product() {
    const { id } = useParams()
    return (
        <>
            <ProductPageHeader />
        </>
    )
}
