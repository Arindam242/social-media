import { Post } from "../components"
import { BaseLayout } from "../layouts"

const HomePage = () => {
	const posts = require("../data/posts.json")

	return (
		<BaseLayout>
			<div className='py-8 space-y-8'>
				{posts.map((post) => (
					<Post post={post} />
				))}
			</div>
		</BaseLayout>
	)
}

export { HomePage }
