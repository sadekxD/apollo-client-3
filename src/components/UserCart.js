import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { Segment, Divider } from "semantic-ui-react";

export const QUERY_CART_INFO = gql`
	query CartItems {
		cart @client {
			items
			total
		}
	}
`;

export function UserCart() {
	const { data } = useQuery(QUERY_CART_INFO);

	return (
		<Segment>
			{/* <h1>My Cart</h1>
			{data?.cart.items.length === 0 ? (
				<p>No Items in the Cart</p>
			) : (
				data?.cart.items.map((item, i) => (
					<p key={i}>
						{item.title} - ${item.price}
					</p>
				))
			)}
			<Divider />
			<h4>Total: {data?.cart.total}</h4> */}
		</Segment>
	);
}
