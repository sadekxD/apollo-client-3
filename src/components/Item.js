import React from "react";
import { Image, Card, Button } from "semantic-ui-react";
import { useMutation, gql, useQuery } from "@apollo/client";
import { cartItemsVar } from "../App";
import { QUERY_CART_INFO } from "./UserCart";

// export const MUTATION_ADD_ITEM_TO_CART = gql`
// 	mutation addCartItem($id: String!, $title: String!, $price: String!) {
// 		addItemToCart(id: $id, title: $title, price: $price) @client {
// 			id
// 		}
// 	}
// `;

export const MUTATION_ADD_ITEM_TO_CART = gql`
	mutation addToCart($id: String!) {
		addItemToCart(id: $id) @client {
			id
		}
	}
`;

// render an item with some styling
export function Item(props) {
	const [addItemToCart] = useMutation(MUTATION_ADD_ITEM_TO_CART);
	const { data } = useQuery(QUERY_CART_INFO);

	// const handleCart = () => {
	// 	addItemToCart({
	// 		variables: {
	// 			id: props.id,
	// 		},
	// 	});
	// };

	return (
		<Card size="small">
			<Image
				src={props.thumbnail_url}
				style={{ height: 125, objectFit: "cover" }}
			/>
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
			</Card.Content>
			<Card.Content
				as={Button}
				onClick={() =>
					addItemToCart({
						variables: { id: props.id },
					})
				}
			>
				Add to Cart
			</Card.Content>
		</Card>
	);
}
