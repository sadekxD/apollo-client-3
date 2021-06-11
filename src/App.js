import React from "react";
import { Grid, Segment, Container } from "semantic-ui-react";
import { ItemsForPurchase } from "./components/ItemsForPurchase";
import { UserCart } from "./components/UserCart";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	makeVar,
} from "@apollo/client";
import { available_items } from "./api";
import { resolvers } from "./resolvers";

export const cartItemsVar = makeVar([]);
// const availableItems = makeVar({
// 	items: available_items,
// 	total: available_items.length,
// });

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				itemsForSale: {
					read() {
						return available_items;
					},
				},
				cart: {
					read() {
						return cartItemsVar();
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	cache: cache,
	resolvers: resolvers,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: "cache-and-network",
		},
	},
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Container>
				<br />
				<Grid>
					<Grid.Row columns="one">
						<Grid.Column>
							<Segment>
								<h2>Learning Apollo Local State Management</h2>
							</Segment>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row columns="two">
						<Grid.Column width="eleven">
							<ItemsForPurchase />
						</Grid.Column>
						<Grid.Column width="five">
							<UserCart />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</ApolloProvider>
	);
}

export default App;
