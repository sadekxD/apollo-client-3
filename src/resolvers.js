import { QUERY_CART_INFO } from "./components/UserCart";
import { QUERY_AVAILABLE_ITEMS } from "./components/ItemsForPurchase";
import { MUTATION_ADD_ITEM_TO_CART } from "./components/Item";

export const resolvers = {
	Mutation: {
		addItemToCart: (_, args, { cache }) => {
			const { cart } = cache.readQuery({ query: QUERY_CART_INFO });
			const { itemsForSale } = cache.readQuery({
				query: QUERY_AVAILABLE_ITEMS,
			});

			const newItem = itemsForSale.find((item) => item.id === args.id);

			cache.writeQuery({
				query: QUERY_CART_INFO,
				data: {
					cart: cart.concat(newItem),
				},
			});

			console.log(cart);

			return newItem;
		},
	},
};
