const Comments = ({ comments }) => {
	return (
		<div className='px-4'>
			<span className='block w-full h-px mb-2 bg-gray-100'/>
			{comments.map((comment) => (
				<p className='mb-1 text-sm'>
					<strong>{comment.author}</strong> - {comment.body}
				</p>
			))}
		</div>
	)
}

export { Comments }
