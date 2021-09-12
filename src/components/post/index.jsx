import { Actions, Comments, Stats, Header } from "."
import { Image } from "@mantine/core"

const Post = ({ post }) => {
	return (
		<article className='max-w-xl mx-auto bg-white rounded-md'>
			<Header post={post} />

			<main>
				<Image src={post.image} fit='cover' />
			</main>

			<footer className='py-4'>
				<Actions post={post} />

				<Stats post={post} />

				<Comments comments={post.comments} />
			</footer>
		</article>
	)
}

export default Post
export * from "./Actions"
export * from "./Comments"
export * from "./Stats"
export * from "./Header"
