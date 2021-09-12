import React from 'react'
import {Card} from 'react-bootstrap'

function Product({product}) {
    return (
        <Card className="my-3 p-3 rounded">
            {/* Product Image */}
            <a href={`/product/${product.id}`}>
                <Card.Img src={product.image}/>
            </a>

            <Card.Body>
                {/* Product Title */}
                <a href={`/product/${product.id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

                {/* Product price */}
                <Card.Text as="h3">
                    {product.price}$
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product